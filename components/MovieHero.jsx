export default function MovieHero({ movie }) {
  return (
    <div className="bg-slate-800 rounded-xl p-8 flex flex-col md:flex-row gap-8 shadow-lg">

      {/* Poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-64 rounded-lg shadow-xl"
      />

      {/* Movie Info */}
      <div className="flex flex-col justify-center max-w-3xl">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-3">
          {movie.Title}
        </h1>

        {/* Meta Info */}
        <p className="text-gray-400 mb-4">
          {movie.Year} • {movie.Runtime || "2h"} • {movie.Genre || "Action"}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-400 text-2xl">★</span>
          <span className="text-xl font-semibold">
            {movie.imdbRating}
          </span>
          <span className="text-gray-400">/10 IMDb</span>
        </div>

        {/* Plot */}
        <p className="text-gray-300 leading-relaxed">
          {movie.Plot}
        </p>

      </div>
    </div>
  );
}