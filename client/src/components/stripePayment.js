import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import Checkout from './checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_live_51O4jGZJzqOOqYxvcvKAxxz9NtlxRQrWmz2bDBC6fv1Y2ftl5CerpKl6EOBUkTI36K6wQEFbj2eLtCK5Ek3Z8IotO006tJwvYRk');

 function StripePayment() {
    const options = {
      // passing the client secret obtained from the Stripe Dashboard
      clientSecret: '{{CLIENT_SECRET}}',
    };
  
    return (
      <Elements stripe={stripePromise} options={options}>
        <Checkout/>
      </Elements>
    );
  };
  export default StripePayment