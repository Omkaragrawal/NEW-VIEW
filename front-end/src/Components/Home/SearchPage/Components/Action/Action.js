import React from "react";
import "./Action.css";
import axios from "../../axios";
import requests from "../../requests-link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Result from "../../Result_Page/Result.js";
import Movies from "./Movies";
export default class Action extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      pages: 0,
      movies: [],
      count_pages: 0,
      posterImg: "https://image.tmdb.org/t/p/original/",
      result_data: {},
    };
  }
  openPopup = (id) => {
    // https://api.themoviedb.org/3
    axios
      .get(`/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`)
      .then((data) => {
        this.setState({ result_data: data.data });
      });
  };
  closePopup = () => {
    this.setState({ result_data: [] });
  };

  clicked = () => {
    this.setState({ show: true });
    this.fetchData(this.state.count_pages + 1);
  };
  componentDidMount() {
    this.fetchData(1);
  }
  fetchData = (page) => {
    this.setState({ count_pages: page });
    axios.get(requests.fetchActionMovies + `&page=${page}`).then((data) =>
      this.setState({
        movies: data.data.results,
        pages: data.data.total_pages,
      })
    );
  };
  previous = () => {
    if (this.state.count_pages > 1 && this.state.count_pages !== 1) {
      let page = this.state.count_pages;
      this.fetchData(page - 1);
    }
  };
  next = () => {
    if (this.state.count_pages <= this.state.pages) {
      let page = this.state.count_pages;
      this.fetchData(page + 1);
    }
  };
  render() {
    return (
      <div className="action">
        <header>
          <Link to="/search">
            <ArrowBackIcon style={{ padding: "5px 10px" }} />
          </Link>
          <p>You are on : {this.state.count_pages}</p>
          <p>Total Pages : {this.state.pages}</p>
        </header>
        <div className="action__movies">
          {this.state.movies.map((movie) => (
            <Movies
              title={movie.original_title}
              poster={movie.poster_path}
              id={movie.id}
              openPopup={this.openPopup}
            />
          ))}
        </div>

        <div className="more__button">
          <footer>
            <button onClick={this.previous}>previous</button>
            <button onClick={this.next}>Next</button>
          </footer>
        </div>
        {typeof this.state.result_data.original_title !== "undefined" ? (
          <Result
            selected={this.state.result_data}
            closePopup={this.closePopup}
          />
        ) : (
          false
        )}
      </div>
    );
  }
}
