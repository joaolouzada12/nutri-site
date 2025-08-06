import { useState } from 'react';
import './app.css';
import Container from './components/Container';
import Home from './page/Home';
import Contato from './page/Contato';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Curriculo from './page/curriculo';
import Artigos from './page/Artigos';

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <section id="home">
          <Home />
        </section>

        <section id="artigos">
          <Artigos />
        </section>
        
        <section id="curriculo">
          <Curriculo />
        </section>

        <section id="contato">
          <Contato />
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default App;
