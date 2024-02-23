import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api';
import { useEffect, useState } from 'react';
import css from './MovieDetailsPage.module.css';
import { Link } from 'react-router-dom';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchDetails() {
      try {
        const fetchedDetails = await getMovieDetails(movieId);
        setDetails(fetchedDetails);
      } catch (error) {}
    }
    fetchDetails();
  }, [movieId]);

  const movieSrc = `https://image.tmdb.org/t/p/w300/${details.poster_path}`;

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <div className={css.container}>
        <img src={movieSrc} alt={details.original_title} />
        <div>
          <h1>{details.title}</h1>
          <p>User score: {details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <p>Drama</p>
        </div>
      </div>
      <div className={css.aditionalInfo}>
        <p>Aditional information</p>
        <Link to="moviecast">Cast</Link>
        <Link to="moviereviews">Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
