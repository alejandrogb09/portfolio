import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;