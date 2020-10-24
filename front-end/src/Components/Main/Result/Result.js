/* eslint-disable */
import React, { useEffect } from "react";
import "./Result.css";
import EventIcon from "@material-ui/icons/Event";
import numeral from "numeral";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "../axios/axios";
import { useState } from "react";
import { useStateValue } from "../stateProvider";
function Result({ id }) {
  const [{ movie__id }, dispatch] = useStateValue();
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`/movie/${id.id}?&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then((res) => setData(res.data));
      return request;
    }
    fetchData();
  }, [id.id]);
  let posterIMG = "https://image.tmdb.org/t/p/w500" + data.poster_path,
    release_date = data.release_date,
    runtime = data.runtime,
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
    runtime === "undefined" ||
    runtime === "null" ||
    runtime < 0 ||
    runtime === "-"
  ) {
    vote_average = noData;
    runtime = "-";
  } else {
    vote_average = data.vote_average + " / 10";
    runtime = data.runtime + " mins";
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
    budget === 0 ||
    release_date > Date()
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

  //Closing Result Page
  const closeRes = (stat) => {
    dispatch({
      type: "MAKE_NULL",
    });
    setRedirect(stat);
  };
  return (
    <div className="result">
      <div className="inner__space">
        <div
          className="result__image"
          // style={{ backgroundImage: `url(${posterIMG})` }}
        >
          <img src={posterIMG} alt="" />
          {release_date > Date() ? (
            <div className="button__div">
              <div className="event">
                <EventIcon />
                <p>Add to calender</p>
              </div>
              )
            </div>
          ) : (
            false
          )}
        </div>
        <div className="result__info">
          <div className="result__title">
            <h1>{data.original_title}</h1>
            <ArrowBackIcon
              className={"button"}
              onClick={() => closeRes(true)}
            />
          </div>
          {typeof data.overview !== "undefined" ||
          data.tagline !== "undefined" ? (
            <div className="result__overview">
              <p className="tagline">{data.tagline}</p>
              <p className="sub-title">Overview</p>
              <p className="res__content">{data.overview}</p>
            </div>
          ) : (
            ""
          )}
          <div className="result__genre">
            <span>
              <p className="genre_title">Genre</p>
            </span>
            <p className="genre__list">{genresList} </p>
            <p className="production">Production</p>
            <p className="production__list">{productionList} </p>
          </div>
          <div className="additional__info">
            <div className="additional__one">
              <p className="title">Vote</p>
              <p className="content">{vote_average}</p>
              <p className="title">Run Time</p>
              <p className="content">{runtime}</p>
            </div>
            <div className="additional__two">
              <p className="title">Release Date</p>
              <p className="content">
                {release_date < Date() ? release_date : "Waiting for movie"}
              </p>
              <p className="title">Budget</p>
              <p className="content">{budget}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
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

export default Result;
