import React from 'react';
import ClientHero from '../components/client/ClientHero';
import SimulateYourCredit from '../components/client/SimulateYourCredit';
import FlexiblePlans from '../components/client/FlexiblePlans';
import CustomerReviews from '../components/client/CustomerReviews';
import PaymentOptions from '../components/client/PaymentOptions';

export default function Client() {
  return (
    <div className="container flex flex-col space-y-10 pt-36">
      <ClientHero />
      <SimulateYourCredit />
      <FlexiblePlans />
      <CustomerReviews />
      <PaymentOptions />
    </div>
  );
}
