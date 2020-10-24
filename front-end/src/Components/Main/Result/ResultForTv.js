/* eslint-disable */
import React from "react";
import "./ResultForTv.css";
import EventIcon from "@material-ui/icons/Event";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "../axios/axios";
import { useState, useEffect } from "react";
import { useStateValue } from "../stateProvider";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
export default function ResultForTv({ id }) {
  const [season, setSeason] = useState([]);
  const [{}, dispatch] = useStateValue();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`/tv/${id.id}?&api_key=dbc0a6d62448554c27b6167ef7dabb1b`)
        .then((res) => {
          setData(res.data);
          setSeason(res.data.seasons);
        });
      return request;
    }
    fetchData();
  }, [id.id]);
  let posterImg = `https://image.tmdb.org/t/p/w500${data.poster_path}`,
    createdBy = nestedDataToString(data.created_by),
    firstairdata = data.first_air_date,
    genre = nestedDataToString(data.genres),
    lastairdata = data.last_air_date,
    lasteposidetoairdate = data.last_episode_to_air,
    title = data.name,
    nexteposide = data.next_episode_to_air,
    numberofeposides = data.number_of_episodes,
    numberofseasons = data.number_of_seasons,
    overview = data.overview,
    production = nestedDataToString(data.production_companies),
    vote = data.vote_average;
  console.log(season);
  const closeRes = (stat) => {
    dispatch({
      type: "MAKE_NULL",
    });
  };
  return (
    <div className="resultfortv">
      <div className="resultfortv__innerspace">
        <div className="resultfortv__image">
          <img src={posterImg} alt="" />
          {nexteposide !== null && nexteposide > Date() ? (
            <div className="button__div">
              <div className="event">
                <EventIcon />
                <p>Add to calender</p>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div className="resultfortv__info">
          <div className="resultfortv__originaltitle">
            <h1>{title}</h1>
            <ArrowBackIcon
              className={"button"}
              onClick={() => closeRes(true)}
            />
          </div>
          <div className="resultfortv__overview">
            <p>{overview}</p>
          </div>
          <div className="resultfortv__genre_production">
            <p className="resultfortv__createdByTitle">Created By</p>
            <p className="resultfortv__createdBy">{createdBy}</p>
            <span>
              <p className="resultfortv__genre_title">Genre</p>
            </span>
            <p className="resultfortv__gernerlist">{genre}</p>
            <p className="resultfortv__production_title">
              Production Companies
            </p>
            <p className="resultfortv__productionlist">{production}</p>
          </div>
          <div className="resultfortv__additonalInfo">
            <div className="resultfortv__additional1">
              <p className="resultfortv__title">Total epposides</p>
              <p className="resultfortv__result">{numberofeposides}</p>

              <p className="resultfortv__title">First Eposide</p>
              <p className="resultfortv__result">{firstairdata}</p>
              <p className="resultfortv__title">Total seasons</p>
              <p className="resultfortv__result">{numberofseasons}</p>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      className="season__button"
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Click here to view
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      {season.map((s) => (
                        <MenuItem>{`${s.name}     ${s.air_date}`}</MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          </div>
          <div className="resutfortv__additional2">
            <p className="resultfortv__title">Vote average</p>
            <p className="resultfortv__result">{vote}/10</p>
            <p className="resultfortv__title">Last Eposide date</p>
            <p className="resultfortv__result">{lastairdata}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function nestedDataToString(nestedData) {
  let nestedArray = [],
    resultString;
  if (nestedData !== undefined) {
    nestedData.forEach(function (item) {
      nestedArray.push(item.name);
    });
  }
  console.log(nestedArray);
  resultString = nestedArray.join(", "); // array to string
  return resultString;
}
