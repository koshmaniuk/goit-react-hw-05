import css from './MovieReviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { getMovieReviews } from '../../api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading;
        const fetchedDetails = await getMovieReviews(movieId);
        setReviews(fetchedDetails.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default MovieReviews;
