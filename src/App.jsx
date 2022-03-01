import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Projects />
        <Education />
        <Experience />
      </main>
    </>
  );
}
