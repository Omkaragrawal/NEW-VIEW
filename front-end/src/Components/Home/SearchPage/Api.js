import React from "react";
import axios from "./axios";
import Result from "./Result_Page/Result";
import Nav from "./Nav";
import "./Style.css";
import MoviesList from "./Components/MoviesList";
import { Link } from "react-router-dom";
import Rec from "./Result_Page/Recommended/Rec";

class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      value: "",
      show: false,
      selected: {},
      pages: 1,
      total_page: 0,
      e: { key: "Enter" },
      show_options: "",
      count: 0,
      API_URL: `api_key=dbc0a6d62448554c27b6167ef7dabb1b`,
      count_inp: 0,
    };
  }
  openPopup = (id) => {
    this.setState({ show: false });
    axios
      .get(`/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`)
      .then((data) => {
        let m = data.data;
        this.setState({ selected: m });
      });
  };
  keyHandle = (e, page = 1) => {
    if (e.key === "Enter") {
      this.setState({ show: true });
      this.setState({ pages: page });
      //Enter api key to search further
      axios
        .get(
          `/search/movie?query=${this.state.value}&api_key=dbc0a6d62448554c27b6167ef7dabb1b&page=${page}`
        )
        .then((data) => {
          let m = data.data.results;
          this.setState({ movies: m });
          this.setState({ total_page: data.data.total_pages });
        }).catch = (e) => {
        console.log("Refresh the page Or else try later", e);
      };
    }
  };
  clicked = (yes) => {
    let s = this.state.count + 1;
    this.setState({ count: s });
    console.log(s);
    if (s % 2 !== 0) {
      this.setState({ show_options: yes });
    } else {
      this.setState({ show_options: !yes });
    }
  };
  //on enter is pressed
  input_value = (e) => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  closePopup = () => {
    this.setState({ selected: {} });
  };
  next = () => {
    if (this.state.pages < this.state.total_page) {
      let m = this.state.pages;
      this.keyHandle(this.state.e, m + 1);
    } else {
      console.log("End");
      alert("You have reached the end !!!!");
    }
  };
  previous = () => {
    if (this.state.pages > 1 && this.state.total_page !== 1) {
      let m = this.state.pages;
      this.keyHandle(this.state.e, m - 1);
    } else {
      alert("You have reached the end !!!!");
    }
  };
  ok = (yes) => {};
  render() {
    return (
      <div
        className={this.state.show_options ? "app-true" : "app"}
        style={{ overflowX: "hidden", maxWidth: "100%" }}
      >
        <Nav
          input_val={this.input_value}
          keyHand={this.keyHandle}
          clicked={this.clicked}
        />
        <MoviesList list={this.state.movies} openPopup={this.openPopup} />
        {typeof this.state.selected.original_title !== "undefined" ? (
          <Result
            selected={this.state.selected}
            closePopup={this.closePopup}
            openPopup={this.openPopup}
          />
        ) : (
          false
        )}
        {this.state.show_options && (
          <div className="opt">
            <div
              className="options"
              style={{
                width: "45vh",
                float: "right",
              }}
            >
              <ul>
                <li>
                  <Link
                    to="/popular"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="link">Popular</span>
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/top-rated"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="link">Top-Rated</span>
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/nowplaying"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="link">Now Playing</span>
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/upcoming"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="link">Upcoming</span>
                  </Link>
                </li>
                <hr />
                <p style={{ color: "aqua", marginTop: "4vh", fontSize: "4vh" }}>
                  Genres Available
                </p>
                <div className="genres-avail">
                  <li>
                    <Link
                      to="/action"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span className="link">Action</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/comedy"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span className="link">Comedy</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/horror"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span className="link">Horror</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/romance"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span className="link">Romance</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/documentries"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span className="link">Documentry</span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        )}
        <div className="more__button">
          {this.state.show && (
            <footer>
              <button onClick={this.next}>Next</button>
              <button onClick={this.previous}>Back</button>
              <p className="total">Total pages : {this.state.total_page}</p>
              <p className="mypage">You are on : {this.state.pages}</p>
            </footer>
          )}
        </div>
      </div>
    );
  }
}

export default Api;
