import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Title Here</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
          tenetur vel quis ipsam sequi veniam velit, accusantium quibusdam
          dolorem dolor tempore, vero nobis autem facilis, quas optio doloremque
          cupiditate?
        </p>
      </div>
      <img className={styles.profile} src="/profile.jpg" alt="profile_pic" />
    </div>
  );
}
