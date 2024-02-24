import css from './MovieCast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorText from '../../components/ErrorText/ErrorText';
import { getMovieCredits } from '../../api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);
        const fetchedDetails = await getMovieCredits(movieId);
        setCast(fetchedDetails.cast);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
      {loading && <Loader />}
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(actor => (
            <li key={actor.id} className={css.listItem}>
              <img
                src={
                  actor.profile_path || null
                    ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                    : defaultImg
                }
                width={150}
                alt=""
              />
              <p>{actor.original_name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have information about the actors</p>
      )}
    </div>
  );
};
export default MovieCast;
