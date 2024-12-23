// Footer.js
import React from 'react';
import '../css/home.css';          
const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@myblog.com">info@myblog.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        <p>&copy; 2024 MyBlog. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
