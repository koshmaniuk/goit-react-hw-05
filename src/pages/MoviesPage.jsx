import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { getMovies } from '../api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        // setMovies([]);
        const fetchedMovies = await getMovies();
        setMovies(fetchedMovies);
      } catch (error) {}
    }
    fetchdata();
  }, []);
  return (
    <div>
      <input type="text" />
      <button type="submit">Search</button>
      <MovieList moviesList={movies} />
    </div>
  );
};

export default MoviesPage;
