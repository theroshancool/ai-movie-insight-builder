import { fetchMovieById } from "@/lib/omdb";
import { fetchTMDBData } from "@/lib/tmdb";
import { analyzeSentiment } from "@/lib/ai";

export async function GET(req, { params }) {
  try {
    const id = params.id;

    if (!id) {
      return Response.json(
        { error: "Movie ID missing" },
        { status: 400 }
      );
    }

    const movie = await fetchMovieById(id);
    const tmdbData = await fetchTMDBData(id);
    const ai = await analyzeSentiment(tmdbData.reviews);

    return Response.json({
      ...movie,
      cast: tmdbData.cast,
      reviews: tmdbData.reviews,
      aiSummary: ai.summary,
      sentiment: ai.sentiment,
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 400 }
    );
  }
}