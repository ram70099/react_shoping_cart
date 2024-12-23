// About.js
import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';

const About = ({ title }) => {  // Destructure title from props
  return (
    <div>
      <Header />
      <div className="hero-blogs">
        <h2>{title}</h2>
      </div>
      <Footer />
    </div>
  );
};

export default About;