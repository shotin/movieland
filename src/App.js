import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg"
import './App.css';


// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }


//MY MOVIE API KEYS: d600aa10

//Calling an API KEY

const API_URL = 'http://www.omdbapi.com?apikey=d600aa10';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm]  = useState([]);

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <React.Fragment>
        <div className='app'>
          <h1>MovieLand</h1>
          <div className='search'>
             <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) } />
             <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
          </div>
          {movies?.length > 0
            ? (
             <div className='container'>
                 {movies.map((movie) => (
                   <MovieCard movie={movie} />
                 ))}
             </div>
            ) : (
              <div className='empty'>
                 <h2>No Movies Found</h2>
              </div>
            )}
        </div>
    </React.Fragment>
  )
}

export default App