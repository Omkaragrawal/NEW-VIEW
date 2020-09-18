import React from "react";
import "./Main.css";
import "./tmdb.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import numeral from "numeral";
export default function Result({ selected, closePopup }) {
  let data = selected;
  // console.log(data)
  if (!navigator.onLine) {
    alert("Network not available");
  }
  let posterIMG = "https://image.tmdb.org/t/p/w500" + data.poster_path,
    overview = data.overview,
    title = data.original_title,
    imdb_id = data.imdb_id,
    release_date = data.release_date,
    runtime = data.runtime,
    tagline = data.tagline,
    production = data.production_companies,
    genres = data.genres,
    budget = data.budget,
    totalRevenue = data.revenue,
    vote_average = data.vote_average,
    productionList = nestedDataToString(production),
    noData = "-",
    genresList = nestedDataToString(genres),
    backdropIMG = "https://image.tmdb.org/t/p/original" + data.backdrop_path;

  if (
    vote_average === "undefined" ||
    vote_average === 0 ||
    imdb_id === "undefined" ||
    imdb_id === "null" ||
    runtime === "undefined" ||
    runtime === "null" ||
    runtime < 0 ||
    runtime === "-"
  ) {
    vote_average = noData;
    imdb_id = "-";
    runtime = "-";
  } else {
    vote_average = data.vote_average + " / 10";
  }

  if (
    production === "undefined" ||
    production === "null" ||
    production === ""
  ) {
    productionList = "";
  }
  if (
    totalRevenue === "undefined" ||
    totalRevenue === 0 ||
    budget === "undefined" ||
    budget === 0
  ) {
    totalRevenue = noData;
    budget = noData;
  } else {
    totalRevenue = numeral(data.revenue).format("($0,0)");
    budget = numeral(data.budget).format("($0,0)");
  }

  if (data.poster_path === null || backdropIMG === null) {
    posterIMG =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
    backdropIMG =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
  }

  return (
    <div
      className="popup"
      style={{
        position: "fixed",
        width: "100%",
        background: `${backdropIMG}`,
        height: "99.5vh",
        // backgroundColor:"black"
      }}
    >
      <div className="Inner">
        <div className="poster">
          <img
            id="poster"
            className="poster"
            src={require("./tmdb.svg")}
            alt="LOGO"
          />
          <button onClick={closePopup} className="button">
            close
          </button>
        </div>
        <img src={posterIMG} alt="posterImg" />
        <div className="data-container">
          <h1 style={{ marginTop: "5px", color: "white" }}>{`${title} `}</h1>
          <span className="tagline">{tagline}</span>
          <p>{overview}</p>

          <div className="additional-details" style={{ margin: "0" }}>
            <p style={{ color: "white", fontSize: "32px" }}>Genre:</p>
            <span
              className="genre-list"
              style={{ color: "#01d277", fontSize: "24px" }}
            >
              {genresList}
            </span>
            <p style={{ color: "white", fontSize: "20px" }}>Production :</p>
            <span
              className="production-list"
              style={{ color: "#01d277", marginLeft: "30px" }}
            >
              {productionList}
            </span>
            <div className="head">
              <div className="head1">
                {" "}
                Vote Average : <br />{" "}
                <span
                  style={{ margin: "0px 12px" }}
                  className="cont"
                >{`${vote_average}`}</span>
              </div>
              <div className="head2">
                {" "}
                Running Time : <br />{" "}
                <span style={{ margin: "0px 12px" }} className="cont">
                  {`${runtime} mins`}{" "}
                </span>{" "}
              </div>
              <div className="head3">
                {" "}
                Original Release :<br />{" "}
                <span style={{ margin: "0px 12px" }} className="cont">
                  {release_date}
                </span>
              </div>
              <div className="head4">
                {" "}
                Box Office : <br />{" "}
                <span
                  style={{ margin: "0px 12px" }}
                  className="cont"
                >{`${totalRevenue}`}</span>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//If no image use this to show
// posterIMG =
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
// backdropIMG =
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"
//Pass array to deconstruct it

//This  function is to replace the array objects to string
function nestedDataToString(nestedData) {
  let nestedArray = [],
    resultString;
  if (nestedData !== undefined) {
    nestedData.forEach(function (item) {
      nestedArray.push(item.name);
    });
  }
  resultString = nestedArray.join(", "); // array to string
  return resultString;
}

function truncStr(string, limit) {
  return string.length > limit
    ? string
        .trim()
        .substring(0, limit - 3)
        .trim() + "..."
    : string;
}
