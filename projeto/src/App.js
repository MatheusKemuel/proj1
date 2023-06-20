import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
