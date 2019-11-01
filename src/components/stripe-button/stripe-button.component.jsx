import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // stripe needs price in cents
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_V2FqNwY7id5CCEs0YNwkYGb500EWD3R3Ff';

    const onToken = token => {
        // note: token is what we pass to back-end server to process charge
        // but in this case we're only doing the front-end integration to see
        // the checkout flow in the front end
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Cody Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;