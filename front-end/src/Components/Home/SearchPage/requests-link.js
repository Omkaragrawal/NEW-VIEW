const API_KEY = "dbc0a6d62448554c27b6167ef7dabb1b";
const requests = {
  top_rated: "/movie/top_rated?",
  now_playing: "/movie/now_playing?",
  popular: "/movie/popular?",
  upComing: "/movie/upcoming?",
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchcrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchanimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchdrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchfamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchfantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchhistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchmusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchmystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchsciencefiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchtvMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchthriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchwar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchwestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTrendingMovies: `/trending/all/day?api_key=${API_KEY}`,
};

export default requests;
