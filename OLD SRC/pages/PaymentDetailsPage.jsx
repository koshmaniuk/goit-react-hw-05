import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getPaymentById } from '../api';
import { PageTitle } from '../components/PageTitle';

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  console.log(backLinkRef);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPayment = await getPaymentById(paymentId);
        setPayment(fetchedPayment);
      } catch (error) {}
    }
    fetchData();
  }, [paymentId]);

  return (
    <div>
      <PageTitle>PaymentDetailsPage</PageTitle>
      <Link to={backLinkRef.current ?? '/payments'}>Back to all payments</Link>
      {payment && (
        <div>
          <div>
            <p>Card number: {payment.cardNumber}</p>
            <p>Card type: {payment.cardType}</p>
            <p>Card owner: {payment.cardOwner}</p>
            <p>
              {payment.isPaid ? 'Paid' : 'Pending'} {payment.amount}$
            </p>
          </div>
          <div>
            <Link to="subpage-a">Subpage A</Link>
            <Link to="subpage-b">Subpage B</Link>
          </div>

          <Outlet />
        </div>
      )}
    </div>
  );
}

// {
//     "id": "1",
//     "cardNumber": "1234 5678 9012 3456",
//     "cardType": "Visa",
//     "cardOwner": "John Doe",
//     "date": "2024-01-01",
//     "amount": 100,
//     "description": "Payment for groceries",
//     "isPaid": true
// }
