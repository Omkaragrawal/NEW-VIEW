import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Row({ title, request, handleClick }) {
  const [movies, setMovie] = useState([]);
  const API_KEY = "api_key=dbc0a6d62448554c27b6167ef7dabb1b";
  let fetchurl = `${request}${API_KEY}`;
  const posterImg = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchurl);
      setMovie(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchurl]);

  return (
    <div className="row">
      <h3 style={{ fontSize: "30px", color: "#eee" }}>{title + " Movies"}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            // onClick={() => handleClick(movie)}
            className={`row__poster`}
            key={movie.id}
            src={`${posterImg}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
        <div className="load__more">
          <ArrowRightAltIcon />
          <p>LOAD MORE</p>
        </div>
      </div>
    </div>
  );
}

export default Row;
