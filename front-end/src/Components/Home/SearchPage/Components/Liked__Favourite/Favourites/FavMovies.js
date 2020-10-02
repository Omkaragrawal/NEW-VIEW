import React, { useEffect, useState } from "react";
import "./Fav.css";
import axios from "../../../../SearchPage/axios";
import DeleteIcon from "@material-ui/icons/Delete";
export default function FavMovies({ id }) {
  const [movies, setMovie] = useState([]);
  const removeMovie = (id) => {
    axios
      .delete(
        "http://localhost:8081/users/favourites",
        { withCredentials: true },
        { id }
      )
      .then((res) => {
        console.log(res.data.favs.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
    <div className="fav-movies">
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
        <DeleteIcon
          onClick={() => removeMovie(id)}
          style={{ color: "white", marginTop: "10px" }}
        />
      </div>
    </div>
  );
}
