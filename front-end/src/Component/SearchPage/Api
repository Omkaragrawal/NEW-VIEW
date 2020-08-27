import React from "react";
import { search } from "./utils";
import Result from './Result_Page/Result'
import Movies from "./Movies";
import './Style.css'
class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      movies: null,
      loading: false,
      value: "",
      selected  : {}
    };
  }
  

  openPopup = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=dbc0a6d62448554c27b6167ef7dabb1b`)
    .then(data => data.json()).then(data => {
      let movie = data
      // console.log(movie)
      this.setState(prev => {
        return {...prev,selected : movie}
      })
    })
  }

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const movies = results;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies = "";
    if (this.state.movies) {
      // console.log(movies)
      movies = <Movies list={this.state.movies} openPopup={this.openPopup}/>;
    }
    return movies;
  }


  render() {
    return (
      <div>
        <div className="search-bar">
        <input
        style={{   background : 'transparant',
        border:'none',
        color: 'White ',
        marginTop: '10px',
        borderBottom : '2px solid yellowgreen',
        paddingBottom : '10px'  }}
          label = "search Bar"
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
         {typeof (this.state.loading === true) ? this.renderMovies : false}  
    {(typeof this.state.selected !== "undefined") ? <Result selected = {this.state.selected} closePopup={this.closePopup}/>: false }
      </div>
      </div>
    );
  }
}

export default App;
