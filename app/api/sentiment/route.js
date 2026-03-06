export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return Response.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
        }),
      }
    );

    const result = await response.json();

    console.log("HF RESULT:", result); // debug

    return Response.json(result);

  } catch (error) {
    console.error("Sentiment error:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}