import React from 'react';

export const ContactForm: React.FC = () => (
  <section className="contact-form" id="contact">
    <h3>Свяжитесь с нами</h3>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Ваше имя" required />
      <input type="email" placeholder="Email" required />
      <textarea rows={5} placeholder="Сообщение" required></textarea>
      <button type="submit">Отправить</button>
    </form>
  </section>
);
