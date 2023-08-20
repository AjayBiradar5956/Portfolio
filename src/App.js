import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Certification from "./components/Certification";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
