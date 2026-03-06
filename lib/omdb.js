export async function fetchMovieById(imdbId) {
  const apiKey = process.env.OMDB_API_KEY;

  const res = await fetch(
    `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`
  );

  const data = await res.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
}