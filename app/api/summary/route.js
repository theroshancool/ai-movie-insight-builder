export async function POST(req) {
  try {
    const { text } = await req.json();

    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
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

    return Response.json(result);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}