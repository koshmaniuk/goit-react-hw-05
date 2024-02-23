import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { getTrendingMovies } from '../api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        setTrendingMovies([]);
        const fetchedMovies = await getTrendingMovies();
        setTrendingMovies(fetchedMovies);
      } catch (error) {}
    }
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList moviesList={trendingMovies} />
    </div>
  );
};

export default HomePage;
