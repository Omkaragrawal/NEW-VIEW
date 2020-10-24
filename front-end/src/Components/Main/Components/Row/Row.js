/* eslint-disable */
import React from "react";
import "./Row.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "../../axios/axios";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useEffect, useState } from "react";
import { useStateValue } from "../../stateProvider.js";

export default function Row({ title, urls }) {
  const [{}, dispatch] = useStateValue();
  const [movies, setMovies] = useState([]);
  const posterIMG = "https://image.tmdb.org/t/p/original/";
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urls);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [urls]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  //sending data using context api
  const sendMovie = (id, title) => {
    dispatch({
      type: "ADD_MOVIE",
      item: {
        id,
        title,
        type: "tv",
      },
    });
  };

  return (
    <div className="row" key={title}>
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <div className="row__space">
            <div>
              <div className="poster__titleSpace">
                <h3 className="poster__title">
                  {truncate(movie.original_name, 20)}
                </h3>
              </div>
              <div>
                <CircularProgressbar
                  className="radius"
                  text={
                    movie.vote_average !== null ||
                    movie.vote_average !== undefined
                      ? movie.vote_average
                      : "-^-"
                  }
                  value={movie.vote_average}
                  maxValue={"10"}
                  background
                  styles={{
                    // Customize the root svg element
                    root: {},

                    // Customize the text
                    text: {
                      // Text color
                      fill: "#10101",
                      // Text size
                      fontSize: "42px",
                    },

                    // Customize background - only used when the `background` prop is true
                    background: {
                      fill: "#111111",
                    },
                  }}
                  key={movie.id}
                />
              </div>
              <LazyLoadImage
                className="row__poster"
                src={
                  movie.poster_path !== null
                    ? `${posterIMG}${movie.poster_path}`
                    : `${img}`
                }
                alt=""
                onClick={() => sendMovie(movie.id, movie.original_name)}
                key={movie.id}
              />
            </div>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    className="more__vert"
                    variant="contained"
                    {...bindTrigger(popupState)}
                  >
                    ...
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => console.log(movie.id)}>
                      Like
                    </MenuItem>
                    <MenuItem onClick={() => console.log(movie.id)}>
                      Favoutire
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        ))}
      </div>
    </div>
  );
}
