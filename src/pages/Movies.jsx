import React, { useState } from 'react';
import './Movies.css';


const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

   const API_KEY = import.meta.env.VITE_API_KEY;
console.log("API KEY:", API_KEY);



const fetchMovies = async () => {
  if (!query) return;
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }


  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="movies-container">
      <h2>MOVIE LIST</h2>

      {/* Genre Buttons (for UI only, not functional in OMDB API unless using filters externally) */}
      <div className="genre-buttons">
        <button>Marvel Movie</button>
        <button>Funny Movie</button>
        <button>Awesome Movie</button>
        <button>Web Series Movie</button>
      </div>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      {/* Movie Grid */}
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                alt={movie.Title}
              />
              <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>Type: {movie.Type}</p>
                <p>Year: {movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#aaa" }}>No movies found. Try searching something else.</p>
        )}
      </div>
    </div>
  );
};

export default Movies;

