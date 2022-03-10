import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className="mainRow" id={styles.section}>
      <span id="homeScroller"></span>
      <div id={styles.hero}>
        <div id={styles.content}>
          <h1>Tyler Yates</h1>
          <h2>Web & Native Development</h2>
          <p>
            A diligent and inspired programmer coming from a diverse technical
            background. Looking forward to working with a team and applying my
            naturally analytical mind in creative, new ways.
          </p>
        </div>
      </div>
    </section>
  );
}
