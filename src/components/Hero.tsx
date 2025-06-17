import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => (

  <section className="hero">
    <div className="hero-text">
      <h2>Подгузники премиум-класса для малышей</h2>
      <p>Безопасность, комфорт и забота — всё, что нужно вашему ребёнку.</p>
      <Link to='/products'>Узнать больше</Link>
    </div>
    <img
      src="https://images.unsplash.com/photo-1582727461470-0d5c8428b6a8"
      alt="baby"
      className="hero-image"
    />
  </section>
);