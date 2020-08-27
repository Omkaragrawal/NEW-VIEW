import React from 'react'
import './Main.css'
import numeral from 'numeral'

function Result({selected, closePopup}){
  let data = selected;
  // console.log(data)
    
  let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path,
  overview = data.overview,
  title = data.original_title,
  imdb_id = data.imdb_id,
  release_date = data.release_date,
  runtime = data.runtime,
  tagline = data.tagline,
  production = data.production_companies,
  genres = data.genres,
  budget = data.budget,
  totalRevenue = data.revenue,
  vote_average = data.vote_average,
  productionList = nestedDataToString(production),
  noData = '-',
  genresList = nestedDataToString(genres),
  backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop;


  if (vote_average === 'undefined' || vote_average === 0) {
    vote_average = noData
  } else {
    vote_average = data.vote_average + ' / 10'
  };
  if (totalRevenue === 'undefined' || totalRevenue === 0 || budget === "undefined"|| budget === 0) {
    totalRevenue =noData
    budget = noData
  } else {
    totalRevenue = numeral(data.revenue).format('($0,0)');
    budget = numeral(data.budget).format('($0,0)');
  };

  if(data.poster_path === null || backdropIMG === null ){
    posterIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
    backdropIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';  
  }
  return (
  <div className="popup" backgroundImage={backdropIMG}>
    <div className="Inner"  style={{backgroundImage:`url(${backdropIMG})`}}>
      <div className="poster">
        <img id="poster" className='poster' src={require('./tmdb.svg')} alt="LOGO"/>
        <button onClick={closePopup} className="button">close</button>
      </div>
      <img src={posterIMG} alt="posterImg"/>
      <div className="data-container">
        <h1>{`${title}    `}<span>IMDB ID : {imdb_id}</span></h1>
        <span className="tagline">{tagline}</span>
        <p>{overview}</p>
        <div className="additional-details">
          <p style={{color:"white"}}>Genre:</p>
          <span className="genre-list" style={{color:"#01d277"}}>{genresList}</span>
          <p style={{color:"white"}}>Production  :</p>
          <span className="production-list" style={{color:"#01d277"}}>{productionList}</span>
          <div className="col-xs-6" style={{marginTop:"50px",float:"right",marginRight:'150px',color:"white"}}> Vote Average :<br/><span style={{color:"#01d277",marginTop:'10px',float:"right"}}  className="meta-data">{`${vote_average}`}</span></div>
          <br/>
          <div className="col-xs-6" style={{float:"left",color:"white",marginTop:"30px",marginLeft:"20px"}}> Running Time :<br/><span  style={{color:"#01d277",marginTop:'10px',float:"right"}}  className="meta-data">{`${runtime} mins`} </span> </div>
          <div className="row nopadding release-details" style={{color:"white"}}>
          <div className="col-xs-6" style={{marginTop: "30px",marginLeft:"240px"}} > Original Release: <br/><span style={{color:"#01d277",marginTop:'10px'}} className="meta-data">{release_date}</span></div>
          <div className="col-xs-6" style={{marginTop:'16px',marginLeft:"20px",float:"left"}}> Box Office:    <br/><span style={{color:"#01d277",marginTop:'10px',float:"right"}} className="meta-data">{`${totalRevenue}`}</span><br></br></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

//This  function is to replace the array objects to string
function nestedDataToString(nestedData) {
    let nestedArray = [],
        resultString;
    if(nestedData !== undefined){
      nestedData.forEach(function(item){
        nestedArray.push(item.name);
      });
    }
    resultString = nestedArray.join(', '); // array to string
    return resultString;
  };

export default Result