import { useState, useEffect } from "react";
import "./App.css";
import MovieItems from "./MovieItems";

//e170121b

const API_URL = 'http://www.omdbapi.com/?apikey=e170121b';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  // const movie = {
  //   "Title": "Batman v Superman: Dawn of Justice",
  //   "Year": "2016",
  //   "imdbID": "tt2975590",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  // };

  useEffect(() => {
    searchMovies('superman');
  }, []);

  return (
    <div className="App">
      <h1 className="logo">CinemaInn</h1>
      <div className="header">
        <input 
          placeholder="Enter movie name" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="cabinet">Cabinet</div>
      </div>
      {
        movies.length > 0
          ? (
            <>
              <h1 className="movie-cat">Movies</h1>
              <div className="container">
                {
                  movies.map((item) => <MovieItems movie= {item} />)
                }
              </div>
            </>
          ) : (
            <div className="empty">
              <h2>No Movies found</h2>
            </div>
          )
      }
      
    </div>
  );
}
  
export default App;