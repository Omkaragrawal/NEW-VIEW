import React from "react";
import axios from "./axios";
import Result from "./Result_Page/Result";
import Nav from "./Nav";
import "./Style.css";
import MoviesList from "./Components/MoviesList";

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
    };
  }
  openPopup = (id) => {
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
  render() {
    return (
      <div>
        <Nav input_val={this.input_value} keyHand={this.keyHandle} />
        <MoviesList list={this.state.movies} openPopup={this.openPopup} />
        {typeof this.state.selected.original_title !== "undefined" ? (
          <Result selected={this.state.selected} closePopup={this.closePopup} />
        ) : (
          false
        )}
        {console.log(this.state.pages)}

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
