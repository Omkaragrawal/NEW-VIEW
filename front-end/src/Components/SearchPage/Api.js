import React from "react";
import "./Style.css";
import "./Result_Page/Main.css";
import axios from "axios";
import Movies from "./Movies";
import Result from "./Result_Page/Result";
class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: "",
      value: "",
      title: null,
      selected: {},
    };
  }

  keyHandle = (e) => {
    if (!navigator.onLine) {
      alert("Network not available");
    }
    if (e.key === "Enter") {
      //Enter api key to search further
      axios(
        `https://api.themoviedb.org/3/search/movie?query=${this.state.value}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
      ).then((data) => {
        let m = data.data.results;
        let n = JSON;
        try {
          for (let i = 0; i < 10; i++) {
            n[i] = data.data.results[i].original_title;
          }
        } catch {
          console.log("Cant able to find the movie");
        }
        // console.log(n)

        // console.log(m)
        this.setState((prev) => {
          return { ...prev, movies: m, titles: n };
        });
      }).catch = (e) => {
        console.log("Refresh the page Or else try later");
      };
    }
  };

  handleInput = (e) => {
    const s = e.target.value;
    this.setState((prev) => {
      return { ...prev, value: s };
    });
  };

  openPopup = (id) => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`
    ).then((data) => {
      let m = data.data;
      // let t = titles
      this.setState((prev) => {
        return {
          ...prev,
          selected: m,
        };
      });
    });
  };

  closePopup = () => {
    this.setState((prev) => {
      return { ...prev, selected: {} };
    });
  };

  render() {
    let suggest = this.state.titles;
    console.log(suggest);
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            className="typehead"
            onKeyPress={this.keyHandle}
            style={{
              background: "transparant",
              border: "none",
              borderBottom: "2px solid yellowgreen",
              paddingBottom: "10px",
            }}
            label="searchBar"
            value={this.state.value}
            onChange={this.handleInput}
            placeholder="Type something to search"
          />
          <option value={suggest} />
        </div>
        {/* {console.log(this.state.title)} */}
        <Movies list={this.state.movies} openPopup={this.openPopup} />
        {typeof this.state.selected.original_title !== "undefined" ? (
          <Result selected={this.state.selected} closePopup={this.closePopup} />
        ) : (
          false
        )}
      </div>
    );
  }
}

export default Api;
