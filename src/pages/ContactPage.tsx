import React from "react";
import { Mail, Phone, LinkedinIcon } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Kontakt</h1>
      <p>Slobodno me kontaktirajte putem sledećih kanala:</p>

      <div className="contact-info">
        <a href="cbranko01@gmail.com" className="contact-item">
          <Mail size={24} />
          <span>cbranko01@gmail.com</span>
        </a>

        <a href="tel:+381603511699" className="contact-item">
          <Phone size={24} />
          <span>+381 60 3511 699</span>
        </a>

        <a
          href="https://www.linkedin.com/in/tvojprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <LinkedinIcon size={24} />
          <span>LinkedIn profil</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
