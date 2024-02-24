import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/movie/day';
// https://api.themoviedb.org/3/trending/movie/day

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjZiMGI1ZDBjYzg5NWE4YjY4ZDMyYjY4NWNjNGM1OCIsInN1YiI6IjY1ZDc3NzhhOTk3NGVlMDE2MjA1MzZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ea0UhbYKCDdMZ7A3QorR6DRQ5H_UCBmuxr1QLHTJ7fM',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(url, options);
  return response.data.results;
};

export const getMovies = async film => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${film}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response.data;
};

// https://api.themoviedb.org/3/trending/movie/day?language=en-US - trending
// https://api.themoviedb.org/3/movie/${movieId}?language=en-US - movie details
// https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US - movie cast
// https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1 - movie reviews
// https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1'
