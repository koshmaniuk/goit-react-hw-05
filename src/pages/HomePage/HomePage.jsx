import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorText from '../../components/ErrorText/ErrorText';
import { getTrendingMovies } from '../../api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      try {
        setLoading(true);
        setTrendingMovies([]);
        const fetchedMovies = await getTrendingMovies();
        setTrendingMovies(fetchedMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {error && <ErrorText />}
      {loading && <Loader />}
      <MovieList moviesList={trendingMovies} />
    </div>
  );
};

export default HomePage;
