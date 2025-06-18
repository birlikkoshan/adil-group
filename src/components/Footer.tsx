import React from 'react';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>Связаться с нами</h4>
        <ul className="contact-list">
          <li><a href="#"><i className="fab fa-whatsapp whatsapp-icon"></i> WhatsApp</a></li>
          <li><a href="#"><i className="fab fa-telegram telegram-icon"></i> Telegram</a></li>
          <li><a href="#"><i className="fab fa-instagram instagram-icon"></i> Instagram</a></li>
          <li><a href="mailto:info@example.com"><i className="fas fa-envelope email-icon"></i> info@example.com</a></li>
          <li><i className="fas fa-map-marker-alt location-icon"></i> г. Астана, ул. Примерная, 123</li>
        </ul>
      </div>
      <div className="footer-bottom">© 2025 ADIL GROUP</div>
    </div>
  </footer>

);
