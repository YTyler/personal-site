import React from "react";
import styles from "../styles/NavButton.module.css";

export default function NavButton(props) {
  return (
    <div className={styles.buttonContainer} onClick={props.onClick}>
      <p className={styles.icon}> {props.children}</p>
      <h2 className={styles.text}>{props.text}</h2>
    </div>
  );
}
