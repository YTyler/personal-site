import React from "react";
import { MdEmail } from "react-icons/md";
import {
  SiLinkedin,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiAmazonaws,
  SiJest,
  SiPostman,
  SiExpo,
} from "react-icons/si";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={`row ${styles.navContainer}`}>
      <section>
        <div className={styles.title}>
          <h1>Tyler Yates</h1>
          <h2>Web & Native Development</h2>
        </div>
        <img
          className={styles.profilePic}
          src="/profile.jpg"
          alt="profile_pic"
        />
      </section>
      <section className={styles.subNav}>
        <h3>Contact Me</h3>
        <div className={styles.contactLinks}>
          <a
            href="https://www.linkedin.com/in/tyler-yates/"
            className={styles.contactItem}
          >
            <SiLinkedin id={styles.liIcon} />
            <p className={styles.contactLabel}>LinkedIn: tyler-yates</p>
          </a>

          <a href="https://github.com/YTyler" className={styles.contactItem}>
            <SiGithub id={styles.gitIcon} />
            <p className={styles.contactLabel}>Github: YTyler</p>
          </a>
          <div className={styles.contactItem}>
            <MdEmail id={styles.mailIcon} />
            <p className={styles.contactLabel}>tyates907@gmail.com</p>
          </div>
        </div>
      </section>
      <section className={styles.subNav}>
        <h3>Technologies</h3>
        <div className={styles.techIcons}>
          <a href="https://www.javascript.com/" title="javascript">
            <SiJavascript id={styles.jsIcon} />
          </a>
          <a href="https://www.typescriptlang.org/">
            <SiTypescript id={styles.tsIcon} />
          </a>
          <a href="https://jestjs.io/">
            <SiJest id={styles.jestIcon} />
          </a>
          <a href="https://reactjs.org/">
            <SiReact id={styles.reactIcon} />
          </a>
          <a href="https://redux.js.org/">
            <SiRedux id={styles.reduxIcon} />
          </a>
          <a href="https://expo.dev/">
            <SiExpo id={styles.exIcon} />
          </a>
          <a href="https://www.postman.com/">
            <SiPostman id={styles.postmanIcon} />
          </a>
          <a href="https://aws.amazon.com/">
            <SiAmazonaws id={styles.awsIcon} />
          </a>
        </div>
      </section>
    </nav>
  );
}
