import React, { useState } from 'react';
import FilterForm from './FilterForm';
import MovieDetails from './MovieDetails';
import movieService from '../services/movieService';

const RandomMovie = () => {
  const [movie, setMovie] = useState(null);

  const handleFilter = async (filters) => {
    console.log('Filters:', filters);
    const movies = await movieService.discoverMovies(filters);
    console.log('Movies from TMDb:', movies);
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } else {
      setMovie(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <FilterForm onFilter={handleFilter} />
      {movie ? <MovieDetails movie={movie} /> : <p>No movies found.</p>}
    </div>
  );
};

export default RandomMovie;
