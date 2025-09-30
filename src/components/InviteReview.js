// src/components/InviteReview.js
import React from 'react';

const InviteReview = () => {
  return (
    <div className="p-6 bg-taleva-indigo-light rounded-lg text-center text-gray-800 flex flex-col justify-center h-full">
      <h3 className="text-2xl font-semibold mb-3">Votre avis compte !</h3>
      <p className="mb-6">
        Nous espérons que vous avez apprécié votre expérience avec nous.  
        N’hésitez pas à <strong>nous noter</strong> et à laisser un commentaire sur Google, TripAdvisor ou notre site.
      </p>
      <a
        href="https://www.google.com/maps/place/Hotel+Bungalow+Taleva/reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-taleva-indigo text-white rounded-md font-semibold hover:bg-taleva-indigo-dark transition"
      >
        Laisser un avis
      </a>
    </div>
  );
};

export default InviteReview;
