import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section className={`mainRow ${styles.projects}`}>
      <ProjectCard url="/fm.jpg" alttext="fighting mongooses" />
      <ProjectCard url="splash.png" alttext="pop" />
      <ProjectCard url="splash.png" alttext="pop" />
      <ProjectCard url="/fm.jpg" alttext="fighting mongooses" />
    </section>
  );
}
