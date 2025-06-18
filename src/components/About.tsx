import React from 'react';
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollFadeIn();
return (
  <section
    id="about"
    ref={ref}
    className="about"
  >
    <div className={`fade-in ${isVisible ? "visible" : ""}`}>
      <h3> О нас</h3>
      <p>Наша компания занимается производством безопасных и качественных подгузников для всех возрастов. Мы работаем как с частными клиентами, так и с государственными учреждениями и корпоративными партнёрами.</p>
    </div>
  </section>
);

};