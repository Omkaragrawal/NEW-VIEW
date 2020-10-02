import React from "react";
import "./Animation.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbsUp from "@material-ui/icons/ThumbUp";
import axios from "axios";
import { useState } from "react";
export default function Movies({ title, poster, id, openPopup }) {
  const [clicked, setClicked] = useState(0);
  const [clickedfav, setClickfav] = useState(0);
  const liked = (id) => {
    const movieid = JSON.stringify(id);
    axios
      .post(
        "http://localhost:8081/users/like",
        {
          movieid,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const favourite = (id) => {
    const movieid = JSON.stringify(id);
    console.log(movieid);
    axios
      .post(
        "http://localhost:8081/users/favourites",
        { movieid },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
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
        <h3>{truncate(title, 19)}</h3>
        <div className="liked">
          <FavoriteIcon
            onClick={() => (setClickfav(clickedfav + 1), favourite(id))}
            style={
              clickedfav % 2 === 0 ? { color: "white" } : { color: "aqua" }
            }
          />
          <ThumbsUp
            onClick={() => (setClicked(clicked + 1), liked(id))}
            style={clicked % 2 === 0 ? { color: "white" } : { color: "red" }}
          />
        </div>
      </div>
    </div>
  );
}
