import React from 'react';
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

export const Partners: React.FC = () => {
  const { ref, isVisible } = useScrollFadeIn();
  
  return (
    <section className='partners' ref={ref}  id="partners">
      <div className={`fade-in ${isVisible ? "visible" : ""}`}>
      <h3 className={`partners-title`}>Наши партнёры</h3>
      <div className="logos-wrapper">
        <div className="logos-track">
          {[
            'github-icon-1',
            'doordash-1',
            'amazon-icon-1',
            'nubank-2',
            'netflix-3',
            'docker',
          ].map((logo, index) => (
            <img
              key={index}
              src={logo == 'nubank-2' ? "https://img.hhcdn.ru/employer-logo/6790519.jpeg" : `https://cdn.worldvectorlogo.com/logos/${logo}.svg` }
              alt={logo}
              className="partner-logo"
            />
          ))}
          {[
            'github-icon-1',
            'doordash-1',
            'amazon-icon-1',
            'nubank-2',
            'netflix-3',
            'docker',
          ].map((logo, index) => (
            <img
              key={`repeat-${index}`}
              src={`https://cdn.worldvectorlogo.com/logos/${logo}.svg`}
              alt={logo}
              className="partner-logo"
            />
          ))}
          {[
            'github-icon-1',
            'doordash-1',
            'amazon-icon-1',
            'nubank-2',
            'netflix-3',
            'docker',
          ].map((logo, index) => (
            <img
              key={`repeat-${index}`}
              src={`https://cdn.worldvectorlogo.com/logos/${logo}.svg`}
              alt={logo}
              className="partner-logo"
            />
          ))}
        </div>
        <div className="fade-left" />
        <div className="fade-right" />
      </div>
    </div>
    </section>
  );
}
