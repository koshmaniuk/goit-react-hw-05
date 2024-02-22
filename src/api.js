import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const searchUrl =
  'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1';
// https://api.themoviedb.org/3/trending/movie/day?language=en-US
// https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1'

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

export const getMovies = async () => {
  const response = await axios.get(searchUrl, options);
  return response.data.results;
};

//
// const url = 'https://api.themoviedb.org/3/search/movie';
// const API_KEY = '';
// const options = {
//   params: {
//     api_key: API_KEY,
//     include_adult: false,
//     language: 'en-US',
//     page: 1,
//   },
// };
// export const getFilm = async query => {
//   try {
//     const response = await axios.get(url, {
//       params: {
//         ...options.params,
//         query: query,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };