const API_KEY = "dbc0a6d62448554c27b6167ef7dabb1b";
const requests = {
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
  nowPlaying: `/movie/now_playing?api_key=${API_KEY}`,
  popular: `/movie/popular?api_key=${API_KEY}`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}`,
  latest: `/movie/latest?api_key=${API_KEY}`,

  //Tv ids
  netflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  amazon: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
  disney_hostar: `/discover/tv?api_key=${API_KEY}&with_networks=2739`,
  sonyLiv: `/discover/tv?api_key=${API_KEY}&with_networks=2646`,
  eros: `/discover/tv?api_key=${API_KEY}&with_networks=2716`,
  bbc_one: `/discover/tv?api_key=${API_KEY}&with_networks=4`,
  appletv: `/discover/tv?api_key=${API_KEY}&with_networks=2552`,
  mx_player: `/discover/tv?api_key=${API_KEY}&with_networks=2964`,
  voot: `/discover/tv?api_key=${API_KEY}&with_networks=2532`,
  cinemax: `/discover/tv?api_key=${API_KEY}&with_networks=359`,

  //movies
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  animation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  crime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  drama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  documentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  family: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  history: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  music: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  mystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  science: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  thriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  war: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  western: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
};

export default requests;
