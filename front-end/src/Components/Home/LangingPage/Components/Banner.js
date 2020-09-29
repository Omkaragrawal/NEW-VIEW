import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../SearchPage/axios";
import requests from "../../SearchPage/requests-link";
function Banner() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrendingMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header className="banner">
      <img
        src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
        alt=""
      />
    </header>
  );
}

export default Banner;
