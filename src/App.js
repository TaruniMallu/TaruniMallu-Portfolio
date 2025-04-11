import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Intro from './components/Intro'; 
import Services from './components/Services'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // <-- add dark mode styles here

function App() {

  return (
    <>
   <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Intro />
      </section>

      <section id="skills">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
