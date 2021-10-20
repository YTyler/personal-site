import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="row">
      <Nav />
      <Home />
    </div>
  );
}
