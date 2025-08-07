import './Contato.css';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contato() {
  return (
    <section className="contato-section">
      <h2>Contatos</h2>
      <ul className="contato-list">
        <li>
          <a
            href="https://wa.me/5591984411414"
            className="icon-link whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a
            href="mailto:nutriflaviad@gmail.com"
            className="icon-link email"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nutricionistaflavia_/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link instagram"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/flavia-dhullyane-854b47194/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link linkedin"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </section>
  );
}
