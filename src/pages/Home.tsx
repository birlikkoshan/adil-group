import React from 'react';
import { Hero, TopNav, About, Partners, ContactForm, Footer, Navbar  } from '../components';

export const Home: React.FC = () => {
  return (
  <div className="main">
    <TopNav />    
    <Navbar />
    <Hero />
    <About />
    <Partners />
    <ContactForm />
    <Footer />
  </div>
  ) 
};
