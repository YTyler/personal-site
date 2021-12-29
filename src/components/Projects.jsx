import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section className={`mainRow ${styles.projectsContainer}`}>
      <h2 id={styles.projectTitle}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard url="/fm.jpg" alttext="fighting mongooses" />
        <ProjectCard url="splash.png" alttext="pop" />
        <ProjectCard url="splash.png" alttext="pop" />
        <ProjectCard url="/fm.jpg" alttext="fighting mongooses" />
      </div>
    </section>
  );
}
