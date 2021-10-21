import React from "react";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleSection}>
        <img src={props.url} alt={props.alttext} />
        <h3 className={styles.title}>Project Title</h3>
      </div>
      <div className={styles.content}>
        <p>
          <strong>Project Description</strong> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quaerat placeat illo culpa? Et sint
          repellat, exercitationem aperiam quas illum pariatur inventore, magnam
          soluta enim consectetur sed non amet porro rerum!
        </p>
      </div>
    </div>
  );
}
