import css from './MoviesPage.module.css';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import NoResult from '../../components/NoResult/NoResult';
import ErrorText from '../../components/ErrorText/ErrorText';
import { getMovies } from '../../api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const handleSearchSubmit = value => {
    setNoResult(false);
    if (value === '') {
      return toast.error('The input field is empty');
    }
    searchParams.set('query', value);
    setSearchParams(searchParams);
  };
  const movieTitle = searchParams.get('query');

  useEffect(() => {
    setError(false);
    setMovies([]);
    async function fetchdata() {
      if (movieTitle !== null) {
        try {
          setLoading(true);
          const fetchedMovies = await getMovies(movieTitle);
          if (fetchedMovies.length === 0) {
            setNoResult(true);
          }
          setMovies(fetchedMovies);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchdata();
  }, [movieTitle]);

  return (
    <div>
      <SearchForm onSubmit={handleSearchSubmit} />
      {error && <ErrorText />}
      {noResult && <NoResult />}
      {loading && <Loader />}
      <MovieList moviesList={movies} />
    </div>
  );
};

export default MoviesPage;
