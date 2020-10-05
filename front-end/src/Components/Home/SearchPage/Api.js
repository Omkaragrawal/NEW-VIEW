import React from "react";
import axios from "./axios";
import Result from "./Result_Page/Result";
import Nav from "./Nav";
import "./Style.css";
import MoviesList from "./Components/MoviesList/MoviesList";
import { Redirect } from "react-router-dom";
import Row from "./Streams/Row";
import requests from "./requests-link";
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
      show_options: false,
      nav_show: true,
      count: 0,
      API_URL: `api_key=dbc0a6d62448554c27b6167ef7dabb1b`,
      count_inp: 0,
      Popular: "",
      Toprated: "",
      Upcoming: "",
      NowPlaying: "",
      Action: "",
      Comedy: "",
      Horror: "",
      Documentries: "",
      Romance: "",
      Trending: "",
      Liked: "",
      Fav: "",
      Animation: "",
      Crime: "",
      Drama: "",
      Family: "",
      Fantasy: "",
      History: "",
      Music: "",
      Mystry: "",
      Science: "",
      Tvmovie: "",
      Thriller: "",
      War: "",
      Western: "",
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
      if (this.state.show_options !== true) {
        this.setState({ show_options: false });
      } else this.setState({ show_options: true });
      if (
        this.state.value !== undefined ||
        this.state.value !== null ||
        this.state.value === ""
      ) {
        this.setState({ show: true });
      } else this.setState({ show: false });
      // this.setState({ show: true });
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
    if (s % 2 !== 0) {
      this.setState({ show_options: yes });
    } else {
      this.setState({ show_options: !yes });
    }
  };
  //on enter is pressed
  input_value = (e) => {
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
  render() {
    return (
      <div
        className={this.state.show_options ? "app-true" : "app"}
        style={{ overflowX: "hidden", maxWidth: "100%" }}
      >
        {this.state.Western && <Redirect to="/western" />}
        {this.state.War && <Redirect to="/war" />}
        {this.state.Action && <Redirect to="/action" />}
        {this.state.Animation && <Redirect to="/animation" />}
        {this.state.Comedy && <Redirect to="/comedy" />}
        {this.state.Crime && <Redirect to="/crime" />}
        {this.state.Drama && <Redirect to="/drama" />}
        {this.state.Documentries && <Redirect to="/documentry" />}
        {this.state.Family && <Redirect to="/family" />}
        {this.state.Fantasy && <Redirect to="/fantasy" />}
        {this.state.History && <Redirect to="/history" />}
        {this.state.Horror && <Redirect to="/horror" />}
        {this.state.Music && <Redirect to="/music" />}
        {this.state.Mystry && <Redirect to="/mystry" />}
        {this.state.Romance && <Redirect to="/romance" />}
        {this.state.Science && <Redirect to="/science" />}
        {this.state.Tvmovie && <Redirect to="/tvmovie" />}
        {this.state.Thriller && <Redirect to="/thriller" />}
        {this.state.Upcoming && <Redirect to="/upcoming" />}
        {this.state.Popular && <Redirect to="/popular" />}
        {this.state.Trending && <Redirect to="/trending" />}
        {this.state.NowPlaying && <Redirect to="/nowplaying" />}
        <Nav
          input_val={this.input_value}
          keyHand={this.keyHandle}
          clicked={this.clicked}
        />
        {this.state.movies !== undefined || this.state.total_page !== 0 ? (
          <MoviesList list={this.state.movies} openPopup={this.openPopup} />
        ) : (
          this.setState({ show: false })
        )}
        {typeof this.state.selected.original_title !== "undefined" && (
          <Result
            selected={this.state.selected}
            closePopup={this.closePopup}
            openPopup={this.openPopup}
          />
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
                <li onClick={() => this.setState({ Trending: true })}>
                  <span className="link">Trending</span>
                </li>
                <hr />
                <li onClick={() => this.setState({ Popular: true })}>
                  <span className="link">Popular</span>
                </li>
                <hr />
                <li onClick={() => this.setState({ Toprated: true })}>
                  <span className="link">Top-Rated</span>
                </li>
                <hr />
                <li onClick={() => this.setState({ NowPlaying: true })}>
                  <span className="link">Now Playing</span>
                </li>
                <hr />
                <li onClick={() => this.setState({ Upcoming: true })}>
                  <span className="link">Upcoming</span>
                </li>
                <hr />
                <p style={{ color: "aqua", marginTop: "4vh", fontSize: "4vh" }}>
                  Genres Available
                </p>
                <div className="genres-avail">
                  <li onClick={() => this.setState({ Action: true })}>
                    <span className="link">Action</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Animation: true })}>
                    <span className="link">Animation</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Comedy: true })}>
                    <span className="link">Comedy</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Crime: true })}>
                    <span className="link">Crime</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Drama: true })}>
                    <span className="link">Drama</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Documentries: true })}>
                    <span className="link">Documentry</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Family: true })}>
                    <span className="link">family</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Trending: true })}>
                    <span className="link">Fantasy</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Fantasy: true })}>
                    <span className="link">History</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Horror: true })}>
                    <span className="link">Horror</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Trending: true })}>
                    <span className="link">Music</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Mystry: true })}>
                    <span className="link">Mystry</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Romance: true })}>
                    <span className="link">Romance</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Trending: true })}>
                    <span className="link">Science</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Trending: true })}>
                    <span className="link">Tv-Movie</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Thriller: true })}>
                    <span className="link">Thriller</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ War: true })}>
                    <span className="link">War</span>
                  </li>
                  <hr />
                  <li onClick={() => this.setState({ Western: true })}>
                    <span className="link">Western</span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        )}
        {this.state.total_page === 0 && (
          <div className="row">
            <Row
              openPopup={this.openPopup}
              title="Netflix"
              urls={requests.netflix}
            />
            <Row
              openPopup={this.openPopup}
              title="Disney Hotstar"
              urls={requests.disney_hostar}
            />
            <Row
              openPopup={this.openPopup}
              title="Amazon Prime"
              urls={requests.amazon}
            />
            <Row
              openPopup={this.openPopup}
              title="Apple Tv"
              urls={requests.appletv}
            />
            <Row
              openPopup={this.openPopup}
              title="BBC One"
              urls={requests.bbc_one}
            />
            <Row
              openPopup={this.openPopup}
              title="Cinemax"
              urls={requests.cinemax}
            />
            <Row
              openPopup={this.openPopup}
              title="Sony Live"
              urls={requests.sonyLiv}
            />
            <Row
              openPopup={this.openPopup}
              title="Eros Cinemas"
              urls={requests.eros}
            />
            <Row
              openPopup={this.openPopup}
              title="Mx Player"
              urls={requests.mx_player}
            />

            <Row openPopup={this.openPopup} title="Voot" urls={requests.voot} />
          </div>
        )}
        {this.state.show && (
          <div className="more__buttons">
            <footer className="bottom_button">
              <button onClick={this.next}>Next</button>
              <button onClick={this.previous}>Back</button>
              <p className="mypage">You are on : {this.state.pages}</p>
              <p className="total">Total pages : {this.state.total_page}</p>
            </footer>
          </div>
        )}
      </div>
    );
  }
}

export default Api;
