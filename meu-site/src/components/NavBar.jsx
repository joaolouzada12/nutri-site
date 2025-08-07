import { useState } from 'react';
import styles from './NavBar.module.css';
import logo from './img/logoFD.png';

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <nav className={styles.navbar}>
      <a href="#home" onClick={fecharMenu}>
        <img src={logo} alt="Logo Flavia Dhullyane" className={styles.logo} />
      </a>

      <button
          className={`${styles.hamburguer} ${menuAberto ? styles.ativo : ''}`}
         onClick={toggleMenu}
      >
         ☰
        </button>



      <div className={`${styles.links} ${menuAberto ? styles.ativo : ''}`}>
        <a className={styles.link} href="#home" onClick={fecharMenu}>Home</a>
        <a className={styles.link} href="#artigos" onClick={fecharMenu}>Artigos</a>
        <a className={styles.link} href="#curriculo" onClick={fecharMenu}>Sobre mim</a>
        <a className={styles.link} href="#contato" onClick={fecharMenu}>Contato</a>
      </div>
    </nav>
  );
}

export default NavBar;

