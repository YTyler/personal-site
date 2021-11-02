import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <article className={`mainRow ${styles.projects}`}>
      <ProjectCard url="/fm.jpg" alttext="fighting mongooses" />
      <ProjectCard url="splash.png" alttext="pop" />
      <ProjectCard url="splash.png" alttext="pop" />
      <ProjectCard url="/fm.jpg" alttext="fighting mongooses" />
    </article>
  );
}
