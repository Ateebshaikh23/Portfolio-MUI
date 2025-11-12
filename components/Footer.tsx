'use client'
import React from 'react';
import "./Footer.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer fade-in-up">
      <div className="footer-section footer-info">
        <h3>📧 Email: <span>ateebshaikh23@gmail.com</span></h3>
        <h3>📍 Location: <span>Pune, India</span></h3>
      </div>

      <div className="footer-section footer-social">
        <a href="https://www.linkedin.com/in/ateeb-shaikh-556116283/" target="_blank" rel="noopener noreferrer" className="icon-hover"><LinkedInIcon /></a>
        <a href="mailto:ateebshaikh23@gmail.com" className="icon-hover"><EmailIcon /></a>
        <a href="https://wa.me/9130206680" target="_blank" rel="noopener noreferrer" className="icon-hover"><WhatsAppIcon /></a>
        <a href="https://www.instagram.com/itzz__addu__/" target="_blank" rel="noopener noreferrer" className="icon-hover"><InstagramIcon /></a>
      </div>

      <div className="footer-section footer-copy">
        <p>© 2025 <strong>Ateeb Shaikh</strong> | Designed & Developed with 💙</p>
      </div>
    </footer>
  );
};

export default Footer;
