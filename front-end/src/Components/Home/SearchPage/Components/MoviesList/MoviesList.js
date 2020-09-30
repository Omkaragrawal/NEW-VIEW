import React from "react";
import "./Movieslist.css";
import Movies from "./Movies";

function MoviesList({ list, openPopup }) {
  const fav = (id) => {
    console.log(id);
  };
  const liked = (id) => {
    console.log(id);
  };
  return (
    <div className="list">
      {list.map((movies) => (
        <Movies
          liked={liked}
          fav={fav}
          key={movies.id}
          title={movies.original_title}
          poster={movies.poster_path}
          id={movies.id}
          openPopup={openPopup}
        />
      ))}
    </div>
  );
}

export default MoviesList;
