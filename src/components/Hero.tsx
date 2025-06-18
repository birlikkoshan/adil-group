import React from 'react';
import { Link } from 'react-router-dom';

import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollFadeIn();
  
  return ( 
    <section ref={ref} className="hero">
      <div className={` hero-text fade-in ${isVisible ? "visible" : ""}`}>
        <h2>Подгузники премиум-класса для малышей</h2>
        <p>Безопасность, комфорт и забота — всё, что нужно вашему ребёнку.</p>
        <Link to='/products'>Узнать больше</Link>
      </div>
      {/* <img
        src="https://images.unsplash.com/photo-1582727461470-0d5c8428b6a8"
        alt="baby"
        className="hero-image"
      /> */}
    </section>
  );
};