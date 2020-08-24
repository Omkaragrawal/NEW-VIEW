import React from "react";
import classes from "./Movie.module.css";
import {truncStr }from './utils'
class MovieCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      getting : props.item,
      selected : {}
    }
  }

render(){
  let data = this.state.getting
  let poster_path = data.poster_path,
    posterImg = "http://image.tmdb.org/t/p/w185" + poster_path,
      vote_average = data.vote_average,
      title = data.title;
      if (poster_path == null){
        posterImg =" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"
      }


      if(vote_average === 0){
        vote_average = ""
      }
  // console.log(this.state.selected)
  return (
    <div 
    className={classes.Container}
      style={{
        backgroundImage:
          `url(${posterImg})`,
      }}>
        {console.log(this.state.getting)}
      <div className={classes.VoteContainer}>
        <span className={classes.Vote}>{vote_average}</span>
      </div>
      <div className={classes.Bottom}>
        <h3 className={classes.Title}>{truncStr(title,20)}</h3>
      </div>
    </div>
  );
};
}
export default MovieCard;
