import { Link, useLocation } from 'react-router-dom';

export const PaymentList = ({ payments }) => {
  const location = useLocation();

  return (
    <ul>
      {payments.map(payment => (
        <li key={payment.id}>
          <p>Amount: {payment.amount}</p>
          <p>Description: {payment.description}</p>
          <Link to={`/payments/${payment.id}`} state={location}>
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
};
