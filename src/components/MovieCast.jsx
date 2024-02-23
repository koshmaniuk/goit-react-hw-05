import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../api';
import { useState, useEffect } from 'react';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(cast);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const fetchedDetails = await getMovieCredits(movieId);
        setCast(fetchedDetails.cast);
      } catch (error) {}
    }
    fetchDetails();
  }, [movieId]);

  const imageUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <div>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={imageUrl + actor.profile_path} alt="" />
          <p>{actor.original_name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </div>
  );
};
export default MovieCast;
