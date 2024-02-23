import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api';
import { useState, useEffect } from 'react';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const fetchedDetails = await getMovieReviews(movieId);
        setReviews(fetchedDetails.results);
      } catch (error) {}
    }
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};
export default MovieReviews;
