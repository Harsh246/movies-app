import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import ReactDOM from 'react-dom';
import { store } from '../store/index';
import { Component } from 'react/cjs/react.production.min';
import {showAll, showFav} from '../actions/index';
class App extends Component {

  render() {
  
function reRender(){

  ReactDOM.render(<App />, document.getElementById('root'));


};
const list = store.getState().list;
const fav = store.getState().favourite;
function onMovieClick(){
store.dispatch(showAll());

}
function onFavClick(){
  store.dispatch(showFav());
  }
store.subscribe(reRender);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab"  onClick={onMovieClick}>
              Movies
            </div>
            <div className="tab"  onClick={onFavClick}>
              Favourites
            </div>

          </div>
          <div className='List'>
{
store.getState().showList?   list.map((moviess, index) => ( <MovieCard movie={moviess} key={'movie-'+index}/>)) : fav.map((moviess, index) => (
    <MovieCard movie={moviess} key={'fav-'+index}/> ))
}


          </div>
        </div>
      </div>
    );

  }

}

export default App;
