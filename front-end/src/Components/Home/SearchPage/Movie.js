import React from "react";
import classes from "./Movie.module.css";
import { truncStr } from "./utils";

function MovieCard({ item, openPopup }) {
  // console.log(item)
  let poster_path = "http://image.tmdb.org/t/p/w185",
    posterImg = "http://image.tmdb.org/t/p/w185" + item.poster_path,
    vote_average = item.vote_average,
    title = item.original_title,
    nodata = "-";
  if (vote_average === 0 || vote_average === "undefined") {
    vote_average = nodata;
  }
  if (poster_path === undefined || poster_path === null) {
    posterImg =
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
  }

  return (
    <div
      onClick={() => {
        let m = item.id;
        openPopup(m);
      }}
      className={classes.Container}
      style={{
        backgroundImage: `url(${posterImg})`,
      }}
    >
      <div className={classes.Bottom}>
        <h3 className={classes.Title}>{truncStr(title, 19)}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
