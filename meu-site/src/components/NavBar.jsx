import styles from './NavBar.module.css';
import logo from './img/logoFD.png';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo Flavia Dhullyane" className={styles.logo} />

      <div className={styles.links}>
        <a className={styles.link} href="#home">Home</a>
        <a className={styles.link} href="#artigos">Artigos</a>
        <a className={styles.link} href="#curriculo">Sobre mim</a>
        <a className={styles.link} href="#contato">Contato</a>
      </div>
    </nav>
  );
}

export default NavBar;
