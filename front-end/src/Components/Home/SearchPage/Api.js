import React, { useState } from "react";
import axios from "./axios";
import Movies from "./Movies";
import Result from "./Result_Page/Result";
import Nav from "./Nav";
import "./Style.css";

class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      value: [],
      show: false,
      selectedd: {},
      pages: 1,
      total_page: 0,
      e: { key: "Enter" },
    };
  }
  openPopup = (id) => {
    // https://api.themoviedb.org/3
    axios
      .get(`/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`)
      .then((data) => {
        let m = data.data;
        this.setState({ selected: m });
      });
  };

  //on enter is pressed
  keyHandle = (e) => {
    if (e.key === "Enter") {
      this.setState({ show: true });
      //Enter api key to search further
      axios
        .get(
          `/search/movie?query=${this.state.value}&api_key=dbc0a6d62448554c27b6167ef7dabb1b&page=${this.state.pages}`
        )
        .then((data) => {
          let m = data.data.results;
          this.setState({ movies: m });
          this.setState({ total_page: data.data.total_pages });
        }).catch = (e) => {
        console.log("Refresh the page Or else try later");
      };
    }
  };

  input_value = (e) => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  closePopup = () => {
    this.setState({ selected: {} });
  };
  previous = () => {
    if (this.state.pages > 1) {
      this.setState({ pages: this.state.pages - 1 });
    }
    this.keyHandle(this.state.e);
  };
  next = () => {
    if (this.state.pages <= this.state.total_page) {
      this.setState({ pages: this.state.pages + 1 });
    }
    this.keyHandle(this.state.e);
  };
  render() {
    return (
      <div>
        <Nav input_val={this.input_value} keyHand={this.keyHandle} />
        <Movies list={this.state.movies} openPopup={this.openPopup} />
        {typeof this.state.selected !== "undefined" ? (
          <Result selected={this.state.selected} closePopup={this.closePopup} />
        ) : (
          false
        )}
        <div className="more__button">
          {this.state.show && (
            <footer>
              <button onClick={this.next}>Next</button>
              <button onClick={this.previous}>Back</button>
            </footer>
          )}
        </div>
      </div>
    );
  }
}

export default Api;
