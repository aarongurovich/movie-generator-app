import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) return <div className="text-center text-gray-500 dark:text-gray-400">No movie selected</div>;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mt-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
        Movie Details
      </h1>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-md max-w-xs"
            />
          ) : (
            <div className="text-gray-500 dark:text-gray-400">No Poster Available</div>
          )}
        </div>
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {movie.title || 'No Title Available'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {movie.overview || 'No overview available for this movie.'}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Rating:</strong> {movie.vote_average !== undefined ? movie.vote_average : 'No Rating'}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Release Date:</strong> {movie.release_date || 'No Release Date Available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
