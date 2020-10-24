import React from "react";
import { Component } from "react";
import "./Search.css";
import { ArrowBack, ExitToApp } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../../axios/axios";
import Movies from "./Movies/Movies";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleShow: "",
      search: this.props.search,
      query: "",
      movies: [],
      total_page: "",
    };
    this.Changed = this.Changed.bind(this);
  }
  Changed = (e) => {
    this.setState({ query: e.target.value });
  };
  // &page=${page}
  SearchQuery = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `/search/movie?query=${this.state.query}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
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
  render() {
    return (
      <div className="search__space">
        <header className={`search__nav`}>
          <div>
            <ArrowBack
              className="arrowback"
              onClick={() => this.state.search(false)}
            />
          </div>
          <div className="options">
            <input
              type="text"
              className="input_space"
              placeholder="Enter movie name to search"
              onChange={(e) => this.Changed(e)}
              onKeyPress={(e) => this.SearchQuery(e)}
            />
            <SearchIcon className="search__icon" />
            <div className="other__options">
              <ExitToApp className="search__exit" onClick={this.exit} />
            </div>
          </div>
        </header>
        {this.state.movies !== undefined || this.state.total_page !== 0 ? (
          <Movies list={this.state.movies} pages ={this.state.total_pages}/>
        ) : (
          this.setState({ show: false })
        )}
      </div>
    );
  }
}
