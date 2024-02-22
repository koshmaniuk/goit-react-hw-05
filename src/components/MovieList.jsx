import { Link } from 'react-router-dom';

const MovieList = ({ moviesList }) => {
  console.log(moviesList);
  return (
    <ul>
      {moviesList.map(movie => (
        <li key={movie.id}>
          <Link>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
