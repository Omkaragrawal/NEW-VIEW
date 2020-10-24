import React, { useState, useEffect } from "react";
import "./GenreMovie.css";
import axios from "../../axios/axios.js";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import requests from "../../requests/request";
import Result from "../../Result/Result";
import { useStateValue } from "../../stateProvider.js";
function GenreMovie({ genre, clicked }) {
  const [movies, setMovies] = useState([]);
  const [{ movie_id, typeOfMovie }, dispatch] = useStateValue();
  const Genre = React.lazy(() => import("./Genre.js"));
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(requests[genre])
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err));
      return request;
    }
    fetchData();
  }, [genre]);
  console.log(movies);

  const setFunc = (id, title) => {
    dispatch({
      type: "ADD_MOVIE",
      item: {
        id,
        title,
        type: "movie",
      },
    });
  };
  const item = movie_id[0];
  return (
    <div className="genre">
      <header className="genre__header">
        <ArrowBackIcon
          className="genre__back"
          onClick={() => {
            clicked(null);
          }}
        />
      </header>
      <div className="genre__inside">
        {movies.map((movie, no) => (
          <Genre
            setFunc={setFunc}
            vote_average={movie.vote_average}
            key={no}
            title={movie.original_title}
            poster={movie.poster_path}
            id={movie.id}
            pages={movie.total_pages}
          />
        ))}
        {movies.length > 1 && (
          <div className="genre__morebutton">
            <li>Next</li>
            <li>Previous</li>
          </div>
        )}
      </div>

      {movie_id.length !== 0 && typeOfMovie === "movie" && <Result id={item} />}
    </div>
  );
}

export default GenreMovie;
