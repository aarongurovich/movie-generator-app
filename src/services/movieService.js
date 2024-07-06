import axios from 'axios';

const API_KEY = '4895e40bb8c2ac2db053216f47afeb13';
const BASE_URL = 'https://api.themoviedb.org/3';

const movieService = {
  getGenres: async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY }
    });
    return response.data.genres;
  },

  discoverMovies: async (filters) => {
    const params = {
      api_key: API_KEY,
      with_genres: filters.with_genres,
      'primary_release_date.gte': filters['primary_release_date.gte'],
      'primary_release_date.lte': filters['primary_release_date.lte'],
      'vote_average.gte': filters['vote_average.gte'],
      with_watch_providers: filters.with_watch_providers,
      watch_region: 'US', // Specify the region if needed
    };

    // Remove undefined params
    Object.keys(params).forEach(key => params[key] === '' && delete params[key]);

    const response = await axios.get(`${BASE_URL}/discover/movie`, { params });
    return response.data.results;
  },

  getProviders: async () => {
    const response = await axios.get(`${BASE_URL}/watch/providers/movie`, {
      params: { api_key: API_KEY }
    });
    return response.data.results;
  },
};

export default movieService;
