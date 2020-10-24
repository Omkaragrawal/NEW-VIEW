/* eslint-disable */
import React from "react";
import "./Movies.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateValue } from "../../../stateProvider.js";
function Movie({ key, id, title, poster, vote_average, pages }) {
  const [{ movie_id }, dispatch] = useStateValue();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const posterImg = "https://image.tmdb.org/t/p/original/";

  let img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
  const sendMovie = (id, title) => {
    dispatch({
      type: "ADD_MOVIE",
      item: {
        id,
        title,
        type: "movie",
      },
    });
    console.log(id, title, "From movie section");
  };
  return (
    <div className="movie__space">
      <div>
        <div className="poster__titleSpace">
          <h3 className="poster__title">{truncate(title, 20)}</h3>
        </div>
        <div className="mov">
          <CircularProgressbar
            className="radius"
            text={vote_average}
            value={vote_average}
            maxValue={"10"}
            styles={{
              text: {
                fontSize: `20px`,
                fill: "white",
              },
            }}
          ></CircularProgressbar>
        </div>
        <LazyLoadImage
          className="movie__poster"
          src={poster !== null ? `${posterImg}${poster}` : `${img}`}
          alt=""
          onClick={() => sendMovie(id, title)}
          key={id}
        />
      </div>
    </div>
  );
}

export default Movie;
