"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const searchMovies = async (value) => {
    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    const res = await fetch(`/api/search?q=${value}`);
    const data = await res.json();
    console.log(results);

    setResults(Array.isArray(data) ? data : []);
  };

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => searchMovies(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
      />

      {results.length > 0 && (
        <div className="absolute w-full bg-slate-900 mt-2 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {results
            .filter((movie) => movie.imdbID)
            .map((movie) => (
              <div
                key={movie.imdbID}
                onClick={() => {
  if (!movie?.imdbID) return;
  router.push(`/movie/${movie.imdbID}`);
}}
                className="flex items-center gap-3 p-3 hover:bg-slate-800 cursor-pointer"
              >
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
                  className="w-10 h-14 object-cover rounded"
                />

                <div>
                  <p className="font-semibold">{movie.Title}</p>
                  <p className="text-gray-400 text-sm">{movie.Year}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
