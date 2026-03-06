import MovieHero from "@/components/MovieHero";
import CastList from "@/components/CastList";
import SentimentCard from "@/components/SentimentCard";
import ReviewList from "@/components/ReviewList";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getMovie(id) {
  const res = await fetch(`${BASE_URL}/api/movie/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    console.log("API ERROR:", data);
    throw new Error("Failed to fetch movie");
  }

  return data;
}

async function analyzeSentiment(plot) {
  const res = await fetch(`${BASE_URL}/api/sentiment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: plot }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.log("Sentiment error:", data);
    throw new Error("Sentiment API failed");
  }

  return data;
}

async function generateSummary(plot) {
  const res = await fetch(`${BASE_URL}/api/summary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: plot }),
  });

  if (!res.ok) {
    throw new Error("Summary API failed");
  }

  return res.json();
}

export default async function MoviePage({ params }) {

  const { id } = params;

  if (!id) {
    return <p>Invalid movie ID.</p>;
  }

  const movie = await getMovie(id);

  const sentimentData = await analyzeSentiment(movie.Plot);
  const sentiment =
    sentimentData?.[0]?.[0] || sentimentData?.[0] || null;

  const summaryData = await generateSummary(movie.Plot);
  const summary = summaryData?.[0]?.summary_text;

  return (
    <div className="p-10 bg-slate-900 text-white min-h-screen">

      <MovieHero movie={movie} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
          <SentimentCard sentiment={sentiment} />
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
          <h3 className="font-bold text-lg mb-3">
            AI Audience Mood
          </h3>

          <p className="text-gray-300">
            {sentiment?.label === "POSITIVE"
              ? "Audience reactions are mostly positive."
              : sentiment?.label === "NEGATIVE"
              ? "Audience reactions are mostly negative."
              : "Audience sentiment could not be determined."}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
          <h3 className="font-bold text-lg mb-3">
            AI Movie Summary
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {summary}
          </p>
        </div>

      </div>

      <CastList cast={movie.cast} />

      <ReviewList reviews={movie.reviews} />

    </div>
  );
}