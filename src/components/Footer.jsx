import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>FlickFinder</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li>TV Show</li>
            <li>Web Series</li>
            <li>Hollywood</li>
            <li>Bollywood</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>FAQs</li>
            <li>Search Movie</li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <input type="email" placeholder="your@email.com" />
          <label>
            <input type="checkbox" /> I agree with <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a>
          </label>
          <button>Send</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <p>© FlickFinder 2025. All rights reserved. Developed by <strong>Shreya Chakraborty</strong>.</p>
      </div>
    </footer>
  );
};

export default Footer;
