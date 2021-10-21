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
      <NavButton text="Back to Top">
        <FaHome />
      </NavButton>
      <NavButton
        text="Projects"
        onClick={() => setProjectSelected(!projectSelected)}
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
