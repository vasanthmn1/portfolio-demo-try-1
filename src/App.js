
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Nav } from './components/nav/Nav';
import { Protfolio } from './components/protfolio/Protfolio';
import { Header } from './header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      {/* <Services /> */}
      {/* <Protfolio /> */}

      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
