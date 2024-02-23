import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { getMovies } from '../api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [film, setFilm] = useState('');
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    async function fetchdata() {
      if (film !== '') {
        try {
          // setMovies([]);
          const fetchedMovies = await getMovies(film);
          setMovies(fetchedMovies);
        } catch (error) {}
      }
    }
    fetchdata();
  }, [film]);

  const handleSubmit = event => {
    event.preventDefault();
    const inputQuery = event.target.searchField.value;
    params.set('query', inputQuery);
    setParams(params);
    setFilm(inputQuery);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchField" />
        <button type="submit">Search</button>
      </form>
      <MovieList moviesList={movies} />
    </div>
  );
};

export default MoviesPage;
