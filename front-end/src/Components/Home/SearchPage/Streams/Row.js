import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";
import { Redirect } from "react-router-dom";
function Row({ title, urls, openPopup }) {
  const [movies, setMovies] = useState([]);
  const [result, setResult] = useState({ status: "", data: "" });
  const posterIMG = "https://image.tmdb.org/t/p/original/";
  const movie_streams = [
    "Netflix",
    "Disney Hotstar",
    "Amazon Prime",
    "Apple Tv",
    "BBC One",
    "Cinemax",
    "Sony Live",
    "Eros Cinemas",
    "Mx Player",
    "Voot",
    "Apple Tv",
  ];
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";

  const resultTitle = (name) => {
    if (name === movie_streams[0]) {
      setResult({ status: true, data: "/netflix" });
    } else if (name === movie_streams[1]) {
      setResult({ status: true, data: "/hotstar" });
    }
    if (name === movie_streams[2]) {
      setResult({ status: true, data: "/amazon" });
    } else if (name === movie_streams[3]) {
      setResult({ status: true, data: "/bbc" });
    }
    if (name === movie_streams[5]) {
      setResult({ status: true, data: "/cinemax" });
    } else if (name === movie_streams[4]) {
      setResult({ status: true, data: "/sony" });
    }
    if (name === movie_streams[6]) {
      setResult({ status: true, data: "/eros" });
    } else if (name === movie_streams[7]) {
      setResult({ status: true, data: "/mxplayer" });
    }
    if (name === movie_streams[8]) {
      setResult({ status: true, data: "/voot" });
    } else if (name === movie_streams[9]) {
      setResult({ status: true, data: "/apple" });
    }
  };
  useEffect(() => {
    //if [] , will run once ,
    async function fetchData() {
      const request = await axios.get(urls);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [urls]);

  return (
    <div className="row">
      <h3 onClick={() => resultTitle(title)}>{title}</h3>
      <span>Click above to see more</span>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => openPopup(movie.id)}
            className="row__poster"
            src={
              movie.poster_path !== undefined ||
              movie.poster_path !== null ||
              movie.poster_path === ""
                ? `${posterIMG}${movie.poster_path}`
                : `${img}`
            }
            alt=""
            key={movie.id}
          />
        ))}
      </div>
      {result.status && <Redirect to={result.data} />}
    </div>
  );
}

export default Row;
