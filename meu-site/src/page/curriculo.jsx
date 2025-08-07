import styles from './Curriculo.module.css';
import foto1 from '../components/img/fotoD.jpeg';
import foto2 from '../components/img/outraFoto.jpeg';

export default function Curriculo() {
  return (
    <section className={styles.curriculoContainer}>
      <div className={styles.sectionRow}>
        <div className={styles.texto}>
          <h1>Flávia Dhullyane</h1>
          <h2>Nutricionista desde 2019</h2>
          <p>
            Pós-graduanda em nutrição clínica e esportiva com vasta experiência em tratamento e prevenção
            de doenças crônicas não transmissíveis e emagrecimento.
          </p>
        </div>
        <div className={styles.imagemWrapper}>
          <img src={foto1} alt="Flávia Dhullyane" className={styles.imagem} />
        </div>
      </div>

      <div className={`${styles.sectionRow} ${styles.invertido}`}>
        <div className={styles.imagemWrapper}>
          <img src={foto2} alt="Flávia Dhullyane" className={styles.imagem} />
        </div>
        <div className={styles.texto}>
          <h2>Experiência Profissional</h2>
          <p>
            Durante minha caminhada profissional tive a oportunidade de me aperfeiçoar no Hospital Universitário
            Bettina Ferro de Souza, onde atuei no setor ambulatorial e hospitalar, o que somou para meu crescimento.
            Atualmente sou residente no programa de oncologia da UFPA e participo de congressos publicando resumos
            e capítulos de livros na área da saúde.
          </p>
        </div>
      </div>
    </section>
  );
}
