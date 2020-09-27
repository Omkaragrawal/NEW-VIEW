import React from "react";
import Movie from "./Movie";
import "./Result_Page/Main.css";
import classes from "./Movies.module.css";
// import Result from "./Result_Page/Result";

const Movies = ({ list, openPopup }) => {
  let cards = "";

  if (list) {
    cards = list.map((m, i) => (
      <div>
        <Movie key={i} item={m} openPopup={openPopup} />
      </div>
    ));
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
    </div>
  );
};

export default Movies;
