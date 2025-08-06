import './Contato.css';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contato() {
  return (
    <section className="contato-section">
      <h2>Contato</h2>
      <ul className="contato-list">
        <li>
          <FaPhoneAlt className="icon" /> <strong>Telefone:</strong>{' '}
          <a href="tel:+5591984411414">(91) 98441-1414</a>
        </li>
        <li>
          <FaEnvelope className="icon" /> <strong>Email:</strong>{' '}
          <a href="mailto:nutriflaviad@gmail.com">nutriflaviad@gmail.com</a>
        </li>
        <li>
          <FaInstagram className="icon" /> <strong>Instagram:</strong>{' '}
          <a href="https://www.instagram.com/nutricionistaflavia_/" target="_blank" rel="noopener noreferrer">
            @nutricionistaflavia_
          </a>
        </li>
        <li>
          <FaLinkedin className="icon" /> <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/flavia-dhullyane-854b47194/" target="_blank" rel="noopener noreferrer">
            Flávia Dhullyane
          </a>
        </li>
      </ul>
    </section>
  );
}
