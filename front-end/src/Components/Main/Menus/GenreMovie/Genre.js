import React from "react";
import "./GenreMovie.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Genre({ id, title, poster, vote_average, setFunc }) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const posterImg = "https://image.tmdb.org/t/p/original/";

  let img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";

  return (
    <div className="movie__space">
      <div>
        <div className="poster__titleSpace">
          <h3 className="poster__title">{truncate(title, 20)}</h3>
        </div>
        <div className="mov">
          <CircularProgressbar
            className="radius"
            text={vote_average}
            value={vote_average}
            maxValue={"10"}
            styles={{
              text: {
                fontSize: `20px`,
                fill: "white",
              },
            }}
          ></CircularProgressbar>
        </div>
        <LazyLoadImage
          className="movie__poster"
          src={poster !== null ? `${posterImg}${poster}` : `${img}`}
          alt=""
          onClick={() => setFunc(id, title)}
          key={id}
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
              <MenuItem onClick={() => console.log(id)}>Like</MenuItem>
              <MenuItem onClick={() => console.log(id)}>Favoutire</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
}

export default Genre;
