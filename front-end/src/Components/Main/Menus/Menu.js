import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Menu.css";
import GenreMovie from "./GenreMovie/GenreMovie.js";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { genre: null };
    this.clicked = this.clicked.bind(this);
  }
  clicked = (type) => {
    console.log(type);
    this.setState({ genre: type });
  };

  render() {
    return (
      <div className="menu">
        <div className="menu__header">
          <ArrowBackIcon
            className="arrowback"
            onClick={() => this.props.showMenu(false)}
          />
        </div>
        <div className="menu__buttons">
          <ul>
            <li>
              <button
                onClick={() => {
                  this.clicked("latest");
                }}
              >
                Latest
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.clicked("nowPlaying");
                }}
              >
                Now Playing
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.clicked("popular");
                }}
              >
                Popular
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.clicked("topRated");
                }}
              >
                Top Rated
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.clicked("upcoming");
                }}
              >
                Upcoming
              </button>
            </li>
          </ul>
        </div>
        <div className="menu__genres">
          <div className="menu__title">
            <h3>Genres</h3>
          </div>
          <div className="menu__list">
            <ul>
              <li
                onClick={() => {
                  this.clicked("action");
                }}
              >
                Action
              </li>
              <li
                onClick={() => {
                  this.clicked("animation");
                }}
              >
                Animation
              </li>
              <li
                onClick={() => {
                  this.clicked("comedy");
                }}
              >
                Comedy
              </li>
              <li
                onClick={() => {
                  this.clicked("criminal");
                }}
              >
                Criminal
              </li>
              <li
                onClick={() => {
                  this.clicked("drama");
                }}
              >
                Drama
              </li>
            </ul>
            <ul>
              <li
                onClick={() => {
                  this.clicked("documentries");
                }}
              >
                Documentries
              </li>
              <li
                onClick={() => {
                  this.clicked("family");
                }}
              >
                Family
              </li>
              <li
                onClick={() => {
                  this.clicked("fantasy");
                }}
              >
                Fantasy
              </li>
              <li
                onClick={() => {
                  this.clicked("history");
                }}
              >
                History
              </li>
              <li
                onClick={() => {
                  this.clicked("horror");
                }}
              >
                Horror
              </li>
            </ul>
            <ul>
              <li
                onClick={() => {
                  this.clicked("music");
                }}
              >
                Music{" "}
              </li>
              <li
                onClick={() => {
                  this.clicked("mystry");
                }}
              >
                Mystry{" "}
              </li>
              <li
                onClick={() => {
                  this.clicked("romance");
                }}
              >
                Romance{" "}
              </li>
              <li
                onClick={() => {
                  this.clicked("science");
                }}
              >
                Science fiction
              </li>
              <li
                onClick={() => {
                  this.clicked("thriller");
                }}
              >
                Thriller{" "}
              </li>
            </ul>
            <ul>
              <li
                onClick={() => {
                  this.clicked("war");
                }}
              >
                War
              </li>
              <li
                onClick={() => {
                  this.clicked("western");
                }}
              >
                Western
              </li>
            </ul>
          </div>
        </div>
        {typeof this.state.genre !== undefined && this.state.genre !== null && (
          <GenreMovie clicked={this.clicked} genre={this.state.genre} />
        )}
      </div>
    );
  }
}
