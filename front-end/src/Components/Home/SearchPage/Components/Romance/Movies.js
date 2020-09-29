import React from "react";
import "./Romance.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbsUp from "@material-ui/icons/ThumbUp";
function Movies({ title, poster, id, openPopup }) {
  const posterImg = "https://image.tmdb.org/t/p/original/";
  let img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="list-item">
      <img
        alt={title}
        src={poster !== null && poster !== undefined ? posterImg + poster : img}
        key={id}
        onClick={() => openPopup(id)}
      />
      <div className="title">
        <h3>{truncate(title, 10)}</h3>
        <div className="liked">
          <FavoriteIcon
            style={{ color: "white", marginTop: "10px", marginRigth: "10px" }}
          />
          <ThumbsUp
            style={{ marginLeft: "10px", marginTop: "10px", color: "white" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Movies;
