import React from "react";
import "./Movieslist.css";
function MoviesList({ list, openPopup }) {
  const posterImg = "https://image.tmdb.org/t/p/original/";
  let img = "";
  return (
    <div className="list">
      {list.map(
        (movies) => (
          (img =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"),
          (
            <img
              src={
                movies.poster_path !== null && movies.poster_path !== undefined
                  ? posterImg + movies.poster_path
                  : img
              }
              key={movies.id}
              onClick={() => openPopup(movies.id)}
              alt={movies.original_title}
            />
          )
        )
      )}
    </div>
  );
}

export default MoviesList;
