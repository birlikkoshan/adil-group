import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Partners } from '../components/Partners';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const Home: React.FC = () => (
  <div className="main">
    <Navbar />
    <Hero />
    <About />
    <Partners />
    <ContactForm />
    <Footer />
  </div>
);
