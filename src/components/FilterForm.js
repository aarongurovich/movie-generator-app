import React, { useState, useEffect } from 'react';
import movieService from '../services/movieService';

const FilterForm = ({ onFilter }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [minRating, setMinRating] = useState('');
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState('');

  useEffect(() => {
    const fetchGenresAndProviders = async () => {
      const genres = await movieService.getGenres();
      setGenres(genres);
      const providers = await movieService.getProviders();
      setProviders(providers);
    };
    fetchGenresAndProviders();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({
      with_genres: selectedGenre,
      'primary_release_date.gte': minYear ? `${minYear}-01-01` : '',
      'primary_release_date.lte': maxYear ? `${maxYear}-12-31` : '',
      'vote_average.gte': minRating,
      with_watch_providers: selectedProvider,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Genre</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Min Year</label>
        <input
          type="number"
          value={minYear}
          onChange={(e) => setMinYear(e.target.value)}
          placeholder="Enter minimum year"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Max Year</label>
        <input
          type="number"
          value={maxYear}
          onChange={(e) => setMaxYear(e.target.value)}
          placeholder="Enter maximum year"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Min Rating (1-10)</label>
        <input
          type="number"
          step="0.1"
          min="1"
          max="10"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          placeholder="Enter minimum rating"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Provider</label>
        <select
          value={selectedProvider}
          onChange={(e) => setSelectedProvider(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Provider</option>
          {providers.map((provider) => (
            <option key={provider.provider_id} value={provider.provider_id}>
              {provider.provider_name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Generate Movie
      </button>
    </form>
  );
};

export default FilterForm;
