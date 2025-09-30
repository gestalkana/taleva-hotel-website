import React, { useState } from 'react';
import Swal from 'sweetalert2';
import InviteReview from './InviteReview';
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simuler envoi réussi
    Swal.fire({
      title: 'Merci beaucoup !',
      text: `Votre message a bien été envoyé, ${formData.name}. Nous vous répondrons rapidement.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 5000,
      timerProgressBar: true,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md grid md:grid-cols-2 gap-10">
      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-3xl font-bold mb-6 text-taleva-indigo">Contactez-nous</h2>

        <label className="block">
          <span className="flex items-center gap-2 mb-1 text-gray-700">
            <FaUser /> Nom
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Votre nom complet"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-taleva-indigo"
          />
        </label>

        <label className="block">
          <span className="flex items-center gap-2 mb-1 text-gray-700">
            <FaEnvelope /> Email
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="votre.email@example.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-taleva-indigo"
          />
        </label>

        <label className="block">
          <span className="flex items-center gap-2 mb-1 text-gray-700">
            <FaTag /> Sujet
          </span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Sujet de votre message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-taleva-indigo"
          />
        </label>

        <label className="block">
          <span className="flex items-center gap-2 mb-1 text-gray-700">
            <FaCommentDots /> Message
          </span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Votre message ici..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-taleva-indigo resize-none"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-taleva-indigo text-white py-3 rounded-md font-semibold hover:bg-taleva-indigo-dark transition"
        >
          Envoyer
        </button>
      </form>

      {/* Invitation à laisser un avis */}
      <InviteReview />
    </div>
  );
};

export default Contact;
