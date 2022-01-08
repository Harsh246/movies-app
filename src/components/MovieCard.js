import React from 'react';
import {addFavourite, removeFavourite} from '../actions/index';
import { store } from '../store/index';
class MovieCard extends React.Component {

  render() {

    const { movie } = this.props;

    function isFav(movie) {

    

      const fav = store.getState().movies.favourite;

      
     
      var index = -1;
     
      if (fav) {
        index = fav.indexOf(movie);
      }

      if (index !== -1)
        return true;

      return false;

    };


    function addFav(movie) {


      store.dispatch(addFavourite(movie));

      console.log('favourite:', store.getState().movies.favourite);


    }

    function removeFav(movie) {

      store.dispatch(removeFavourite(movie));
      console.log('favourite:', store.getState().movies.favourite);

    }
 


    return (

      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />

        </div>
        <div className="right">
          <div className="title" >
            {movie.Title}
          </div>

          <div className="plot" >
            {movie.Plot}
            <div className="footer" >
              <div className="rating">{movie.imdbRating}</div>
              {
                isFav(movie) ? <button className="unfavourite-btn" onClick={() => removeFav(movie)}>unfavourite</button> : <button className="favourite-btn" onClick={() => addFav(movie)}>favourite</button>


              }
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MovieCard;
