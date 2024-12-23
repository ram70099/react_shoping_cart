// Contact.js
import React from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

const Contact = ({ title }) => {
  return (
    <div>
      <div className="hero-blogs">
        <Header />
        <h2>{title}</h2>
        <h2>This is the {title} .</h2>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
