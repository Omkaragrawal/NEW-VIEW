import React from "react";
import { useState, useEffect } from "react";
import axios from "../../axios";
import "./Rec.css";
function Rec({ title, url, openPopup }) {
  const [movies, setMovies] = useState([]);
  const posterIMG = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [url]);
  console.log(movies);
  return (
    <div className="row">
      {movies.length > 1 && <h3>{title}</h3>}
      {movies.length >= 1 && (
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              className={`row__poster`}
              key={movie.id}
              src={`${posterIMG}${movie.poster_path}`}
              alt={movie.original_title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Rec;
