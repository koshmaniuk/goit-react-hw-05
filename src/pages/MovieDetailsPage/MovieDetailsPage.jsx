import css from './MovieDetailsPage.module.css';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorText from '../../components/ErrorText/ErrorText';
import { getMovieDetails } from '../../api';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const fetchedDetails = await getMovieDetails(movieId);
        setDetails(fetchedDetails);
      } catch (error) {
        setError(true);
      }
    }
    fetchDetails();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div>
      <Link to={location.state ?? '/movies'}>Go back</Link>
      {error ? (
        <ErrorText />
      ) : (
        <div>
          <div className={css.container}>
            <img
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${details.poster_path}`
                  : defaultImg
              }
              width={250}
              alt={details.original_title}
            />
            <div>
              <h1>{details.title}</h1>
              <p>User score: {details.vote_average}</p>
              <h2>Overview</h2>
              <p>{details.overview}</p>
              <h3>Genres:</h3>
              <p></p>
            </div>
          </div>
          <div className={css.aditionalInfo}>
            <p>Aditional information</p>
            <Link to="moviecast" state={location.state}>
              Cast
            </Link>
            <Link to="moviereviews" state={location.state}>
              Reviews
            </Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
