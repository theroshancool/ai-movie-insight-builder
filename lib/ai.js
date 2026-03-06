export async function analyzeSentiment(reviews) {
  const token = process.env.HF_TOKEN;

  const text = reviews
    .map((r) => r.content)
    .join(" ")
    .slice(0, 2000); // limit text

  if (!text) {
    return {
      summary: "No audience reviews available.",
      sentiment: "Neutral",
    };
  }

  const res = await fetch(
    "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: text,
      }),
    }
  );

  const data = await res.json();

  const label = data[0]?.label || "neutral";

  let sentiment = "Mixed";

  if (label === "LABEL_2") sentiment = "Positive";
  if (label === "LABEL_0") sentiment = "Negative";

  return {
    summary: text.slice(0, 200) + "...",
    sentiment,
  };
}