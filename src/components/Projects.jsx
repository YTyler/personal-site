import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section className={"mainSection " + styles.projectContainer}>
      <ProjectCard url="/fm.jpg" alttext="fighting mongooses" />
      <ProjectCard url="splash.png" alttext="pop" />
    </section>
  );
}
