import React from "react";
import "./Movieslist.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
function MoviesList({ list, openPopup }) {
  const posterImg = "https://image.tmdb.org/t/p/original/";
  let img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
  return (
    <div className="list">
      {list.map((movies) => (
        <div className="list-item">
          <img
            alt={movies.original_title}
            src={
              movies.poster_path !== null && movies.poster_path !== undefined
                ? posterImg + movies.poster_path
                : img
            }
            key={movies.id}
            onClick={() => openPopup(movies.id)}
          />
          <div className="fav__icon">
            <FavoriteIcon style={{ color: "white", marginLeft: "20px" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
