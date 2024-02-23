import { Link } from 'react-router-dom';

const MovieList = ({ moviesList }) => {
  return (
    <ul>
      {moviesList.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
