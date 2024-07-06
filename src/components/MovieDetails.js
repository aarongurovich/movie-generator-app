import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) return <div>No movie selected</div>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{movie.overview}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">Rating: {movie.vote_average}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Release Date: {movie.release_date}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
    </div>
  );
};

export default MovieDetails;
