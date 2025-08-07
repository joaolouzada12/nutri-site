import { useEffect } from 'react';  // import useEffect
import './app.css';
import Container from './components/Container';
import Home from './page/Home';
import Contato from './page/Contato';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Curriculo from './page/curriculo';
import Artigos from './page/Artigos';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const sections = document.querySelectorAll('section.fadeIn');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <>
      <Navbar />

      <Container>
        <section id="home" className="fadeIn">
          <Home />
        </section>

        <section id="artigos" className="fadeIn">
          <Artigos />
        </section>
        
        <section id="curriculo" className="fadeIn">
          <Curriculo />
        </section>

        <section id="contato" className="fadeIn">
          <Contato />
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default App;
