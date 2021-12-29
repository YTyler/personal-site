import React from "react";
import styles from "../styles/ProjectCard.module.css";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function ProjectCard(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleSection}>
        <img src={props.url} alt={props.alttext} />
        <h3 className={styles.title}>{props.title}</h3>
      </div>
      <div className={styles.content}>
        <p>{props.children}</p>
      </div>
      <div className={styles.link}>
        <a href={props.repository} target="_blank" rel="noreferrer">
          <p className={styles.linkText}>
            Go to Repository
            <MdOutlineOpenInNew />
          </p>
        </a>
      </div>
    </div>
  );
}
