import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { store } from '../store/index';
import { Component } from 'react/cjs/react.production.min';
class App extends Component {
  render() {
console.log(store.getState());
console.log(store.getState().list);
const list = store.getState().list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">
              Movies
            </div>
            <div className="tab">
              Favourites
            </div>

          </div>
          <div className='List'>
            {list.map((moviess, index) => (
              <MovieCard movie={moviess} key={'movie-'+index}/>

            ))}



          </div>
        </div>
      </div>
    );

  }

}

export default App;
