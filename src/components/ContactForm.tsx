import React from 'react';
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

export const ContactForm: React.FC = () => {
  const { ref, isVisible } = useScrollFadeIn();
  
  return (
    <section ref={ref} className="contact-form" id="contact">
      <div className={`fade-in ${isVisible ? "visible" : ""}`}>
      <h3>Свяжитесь с нами</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Email" required />
        <textarea rows={5} placeholder="Сообщение" required></textarea>
        <button type="submit">Отправить</button>
      </form>
      </div>
    </section>
  )
};
