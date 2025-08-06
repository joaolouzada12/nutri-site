import nutriImage from '../assets/nutri.jpg';
import './Home.css';

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-text">
        <h1>Cuide da sua saúde com amor e ciência</h1>
        <p>Nutrição personalizada para você viver melhor todos os dias.</p>
      </div>
      <div className="home-image-wrapper">
        <img src={nutriImage} alt="Nutrição saudável" className="nutri-image" />
      </div>
    </section>
  );
}
