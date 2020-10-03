import React from "react";
import axios from "axios";
import "./Fav.css";
import FavMovies from "./FavMovies";
import { Redirect } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default class Fav extends React.Component {
  constructor() {
    super();
    this.state = { movieId: [], show: "" };
  }
  axios_funciton = () => {
    axios
      .get("http://localhost:8081/users/favourites", {
        withCredentials: true,
      })
      .then((res) => this.nestedDataToString(res.data.favs))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.axios_funciton();
  }
  nestedDataToString = (nestedData) => {
    const length_of_array = nestedData.length;
    let result = [];
    for (let a = 0; a < length_of_array; a++) {
      result[a] = nestedData[a]["movieId"];
    }
    this.setState({ movieId: result });
  };

  render() {
    return (
      <div>
        <header className="header">
          <ArrowBackIcon
            style={{ color: "white", padding: "10px" }}
            onClick={() => this.setState({ show: true })}
          />
          <p>FAVOURITES MOVIES</p>
        </header>
        <div className="fav">
          {this.state.movieId.map((err, amt) => (
            <FavMovies id={err} />
          ))}
        </div>
        {this.state.show === true && <Redirect to="/search" />}
      </div>
    );
  }
}
