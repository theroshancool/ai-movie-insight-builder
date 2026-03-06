export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return Response.json([]);
  }

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${query}`
    );

    const data = await res.json();

    if (data.Response === "False") {
      return Response.json([]);
    }

    return Response.json(data.Search || []);
  } catch (error) {
    console.error("Search API error:", error);
    return Response.json([]);
  }
}