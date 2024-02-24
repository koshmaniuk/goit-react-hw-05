import css from './MovieDetailsPage.module.css';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import ErrorText from '../../components/ErrorText/ErrorText';
import Loader from '../../components/Loader/Loader';
import { getMovieDetails } from '../../api';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState('');

  useEffect(() => {
    async function fetchDetails() {
      try {
        const fetchedDetails = await getMovieDetails(movieId);
        setDetails(fetchedDetails);
        setGenres(fetchedDetails.genres.map(({ name }) => name).join(', '));
      } catch (error) {
        setError(true);
      }
    }
    fetchDetails();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div className={css.movieDetailsPageContainer}>
      <Link to={location.state ?? '/movies'} className={css.link}>
        Go back
      </Link>
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
              className={css.poster}
              width={250}
              alt={details.original_title}
            />
            <div className={css.infoContainer}>
              <h1>{details.title}</h1>
              <p>User score: {details.vote_average}</p>
              <h2>Overview</h2>
              <p>{details.overview}</p>
              <h3>Genres:</h3>
              <p>{genres}</p>
            </div>
          </div>
          <div className={css.aditionalInfo}>
            <p>Aditional information</p>
            <Link to="moviecast" state={location.state} className={css.link}>
              Cast
            </Link>
            <Link to="moviereviews" state={location.state} className={css.link}>
              Reviews
            </Link>
          </div>
          <div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
