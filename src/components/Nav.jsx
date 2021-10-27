import React, { useState } from "react";
import {
  FaHome,
  FaFolder,
  FaFolderOpen,
  FaAddressCard,
  FaTools,
  FaPenFancy,
} from "react-icons/fa";
import NavButton from "./NavButton";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [projectSelected, setProjectSelected] = useState(false);
  return (
    <nav className={`row ${styles.navContainer}`}>
      <div className={styles.title}>
        <h1>Tyler Yates</h1>
        <h2>Web & Native Development</h2>
      </div>
      <NavButton text="Home">
        <FaHome />
      </NavButton>
      <NavButton
        text="Projects"
        onClick={() => setProjectSelected((prevState) => !prevState)} //reversing state with function version
      >
        {projectSelected ? <FaFolderOpen /> : <FaFolder />}
      </NavButton>
      <NavButton text="Contact">
        <FaAddressCard />
      </NavButton>
      <NavButton text="Tech">
        <FaTools />
      </NavButton>
      <NavButton text="Resume">
        <FaPenFancy />
      </NavButton>
    </nav>
  );
}
