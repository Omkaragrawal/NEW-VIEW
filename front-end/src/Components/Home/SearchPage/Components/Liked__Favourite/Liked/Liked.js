import React from "react";
import axios from "axios";
import "./Liked.css";
import LikeMovie from "./LikeMovie";
import { Redirect } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default class Fav extends React.Component {
  constructor() {
    super();
    this.state = { movieId: [], show: "" };
  }
  axios_funciton = () => {
    axios
      .get("http://localhost:8081/users/like", {
        withCredentials: true,
      })
      .then((res) => this.nestedDataToString(res.data.liked))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.axios_funciton();
  }
  nestedDataToString = (nestedData) => {
    const length_of_array = nestedData.length;
    console.log(length_of_array);
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
        </header>
        <div className="like">
          {this.state.movieId.map((err) => (
            <LikeMovie id={err} />
          ))}
        </div>
        {this.state.show === true && <Redirect to="/search" />}
      </div>
    );
  }
}
