import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </>
  );
}
