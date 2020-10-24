import React from "react";
import Movie from "./Movie";
import "./Movies.css";
function Movies({ list ,pages}) {
  return (
    <div className="movies">
      {list.map((movie) => (
        <Movie
          vote_average={movie.vote_average}
          key={movie.id}
          title={movie.original_title}
          poster={movie.poster_path}
          id={movie.id}
          pages = {pages}
        />
      ))}
    </div>
  );
}

export default Movies;
