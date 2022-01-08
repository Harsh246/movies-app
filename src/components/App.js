import React from 'react';
import { store } from '../store/index';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import ReactDOM from 'react-dom';

import { Component } from 'react/cjs/react.production.min';
import {showAll, showFav} from '../actions/index';
class App extends Component {

  render() {
//console.log("state: ",store.getState());
   
  
function reRender(){

  ReactDOM.render(<App />, document.getElementById('root'));


};
const list = store.getState().movies.list;
const fav = store.getState().movies.favourite;
function onMovieClick(){
store.dispatch(showAll());

}
function onFavClick(){
  store.dispatch(showFav());
  }
store.subscribe(reRender);
const shList = store.getState().movies.showList;
//console.log("List:", list);


    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${ shList ? 'active-tabs' : ''}` } onClick={onMovieClick}>
              Movies
            </div>
            <div className={`tab ${ shList ? "": "active-tabs"} `}   onClick={onFavClick}>
              Favourites
            </div>

          </div>
          <div className='List'>
{
store.getState().movies.showList?   list.map((moviess, index) => ( <MovieCard movie={moviess} key={'movie-'+index}/>)) : fav.map((moviess, index) => (
    <MovieCard movie={moviess} key={'fav-'+index}/> ))
}
{
  (fav.length===0)?<div className="tab">No Movies To Show</div>:' '
}

          </div>
        </div>
      </div>
    );

  }

}

export default App;
