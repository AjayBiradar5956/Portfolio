import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
