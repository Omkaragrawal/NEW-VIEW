import React from "react";
import "./Movieslist.css";
import Movies from "./Movies";

function MoviesList({ list, openPopup }) {
  return (
    <div className="list">
      {list.map((movies) => (
        <Movies
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
