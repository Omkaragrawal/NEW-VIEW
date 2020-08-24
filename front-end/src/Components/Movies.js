import React from "react";
import Movie from "./Movie";
import classes from "./Movies.module.css";

function Movies ({ list }) {
  let cards = <h1>Loading</h1>;

  if (list) {
    cards = list.map((m, i) =><div> <Movie key={i} item={m}/></div>);
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
    </div>
  );
};

export default Movies;
