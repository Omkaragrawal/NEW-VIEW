const API_KEY = "dbc0a6d62448554c27b6167ef7dabb1b";
const requests = {
  top_rated: "/movie/top_rated?",
  now_playing: "/movie/now_playing?",
  popular: "/movie/popular?",
  upComing: "/movie/upcoming?",
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTrendingMovies: `/trending/all/day?api_key=${API_KEY}`,
};

export default requests;
