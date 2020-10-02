import React, { useEffect, useState } from "react";
import "./Liked.css";
import axios from "../../../../SearchPage/axios";
import DeleteIcon from "@material-ui/icons/Delete";
export default function LikeMovie({ id }) {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`)
      .then((data) => setMovie(data.data))
      .catch((er) => console.log(er));
  });
  const posterImg = "https://image.tmdb.org/t/p/original/";
  let img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";

  return (
    <div className="like-movies">
      <img
        alt={movies.original_title}
        src={
          movies.poster_path !== null && movies.poster_path !== undefined
            ? posterImg + movies.poster_path
            : img
        }
        key={movies.id}
      />
      <div className="remove">
        <DeleteIcon style={{ color: "white", marginTop: "10px" }} />
      </div>
    </div>
  );
}
