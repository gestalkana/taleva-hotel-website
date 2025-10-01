// src/components/InviteReview.js
import React from 'react';
import logo from '../assets/images/logo-white.jpg';

const InviteReview = () => {
  return (
    <div className="w-full h-full p-8 bg-taleva-indigo-light rounded-xl text-center text-gray-800 flex flex-col justify-center items-center shadow-md border border-gray-200">
      <img
        src={logo}
        alt="Logo Taleva"
        className="w-64 h-auto mb-6"
      />
      <h3 className="text-2xl font-bold mb-4">Votre avis compte !</h3>
      <p className="mb-6 text-2xs">
        Nous espérons que vous avez apprécié votre expérience avec nous.
        <br />
        N’hésitez pas à <strong>nous noter</strong> et à laisser un commentaire sur Google Maps.
      </p>
      <a
  href="https://www.google.com/maps/place/Hotel+Bungalow+Taleva/@-18.1711806,49.38711,17z/data=!4m8!3m7!1s0x21f4ff8f9c4ce5b3:0xc8a6a0e94aabbc68!8m2!3d-18.1711806!4d49.38711!9m1!1b1!16s%2Fg%2F11sk7cjx8_?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-taleva-indigo text-white rounded-md font-semibold hover:bg-taleva-indigo-dark transition"
>
  Laisser un avis sur Google
</a>

    </div>
  );
};

export default InviteReview;
