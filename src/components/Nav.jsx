import React, { useState } from "react";
import { FaHome, FaFolder, FaFolderOpen, FaPenFancy } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiGithub,
  SiAmazonaws,
  SiJest,
  SiPostman,
} from "react-icons/si";
import NavButton from "./NavButton";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [projectSelected, setProjectSelected] = useState(false);
  return (
    <nav className={`row ${styles.navContainer}`}>
      <section>
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
        <NavButton text="Resume">
          <FaPenFancy />
        </NavButton>
      </section>
      <section className={styles.subNav}>
        <h3>Contact</h3>
      </section>
      <section className={styles.subNav}>
        <h3>Technologies</h3>
        <div className={styles.techIcons}>
          <div>
            <a href="https://www.javascript.com/">
              <SiJavascript id={styles.jsIcon} />
            </a>
          </div>
          <div>
            <a href="https://www.typescriptlang.org/">
              <SiTypescript id={styles.tsIcon} />
            </a>
          </div>
          <div>
            <a href="https://jestjs.io/">
              <SiJest id={styles.jestIcon} />
            </a>
          </div>
          <div>
            <a href="https://reactjs.org/">
              <SiReact id={styles.reactIcon} />
            </a>
          </div>
          <div>
            <a href="https://redux.js.org/">
              <SiRedux id={styles.reduxIcon} />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <SiGithub id={styles.gitIcon} />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <SiPostman id={styles.postmanIcon} />
            </a>
          </div>
          <div>
            <a href="https://aws.amazon.com/">
              <SiAmazonaws id={styles.awsIcon} />
            </a>
          </div>
        </div>
      </section>
    </nav>
  );
}
