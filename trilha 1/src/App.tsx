import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Gallery from './components/Gallery/Gallery';
import ProfileCard from './components/ProfileCard/ProfileCard';

const App: React.FC = () => {
  return (
    <div>
      <section style={{ marginBottom: "30px" }}>
        <h2>Botão</h2>
      <Button />
      </section>
      <section style={{ marginBottom: "30px" }}>
        <h2>Forma de contato</h2>
      <ContactForm />
      </section>
      <section style={{ marginBottom: "30px" }}>
        <h2>Galeria</h2>
      <Gallery/>
      </section>
      <section style={{ marginBottom: "30px" }}>
        <h2>Barra de navegação</h2>
      <Navbar />
      </section>
      <section style={{ marginBottom: "30px" }}>
        <h2>Perfil</h2>
      <ProfileCard />
      </section>
    </div>
  );
}

export default App;