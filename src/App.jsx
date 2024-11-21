import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <h1>Benjamin Mensah's Portfolio</h1>
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Benjamin Mensah</p>
      </footer>
    </div>
  );
}

export default App;
