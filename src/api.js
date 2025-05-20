import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return res.data.results;
};

export const fetchGenres = async () => {
  const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return res.data.genres;
};

export const fetchByGenre = async (genreId) => {
  const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  return res.data.results;
};

export const fetchTrailer = async (movieId) => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
  const trailers =  res.data.results;

  const trailer = trailers.find(video => video.type === 'Trailer' && video.site === 'YouTube');

   return trailer || null;
};