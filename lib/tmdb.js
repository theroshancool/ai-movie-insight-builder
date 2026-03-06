export async function fetchTMDBData(imdbId) {
    const apiKey = process.env.TMDB_API_KEY;

    // 1️⃣ Convert IMDb ID → TMDB Movie ID
  const findRes = await fetch(
    `https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&external_source=imdb_id`
  );

  const findData = await findRes.json();

  if (!findData.movie_results.length) {
    return { cast: [], reviews: [] };
  }

  const movieId = findData.movie_results[0].id;

  // 2️⃣ Get Cast
  const castRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
  );

  const castData = await castRes.json();

  // 3️⃣ Get Reviews
  const reviewRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
  );

  const reviewData = await reviewRes.json();

  return {
    cast: castData.cast.slice(0, 8),
    reviews: reviewData.results.slice(0, 5),
  };
    
}