import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="row">
      <Nav />
      <main>
        <Home />
        <Projects />
      </main>
    </div>
  );
}
