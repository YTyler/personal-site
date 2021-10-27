import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={`mainSection ${styles.homeContainer}`}>
      <div className={styles.content}>
        <h1>Title Here</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum
          dolorem nam architecto. Asperiores quis nobis labore eius? Aspernatur,
          neque expedita. Corporis facere voluptatibus, suscipit quia velit quas
          culpa expedita. Sit dicta ipsam, ratione accusamus assumenda aliquid
          delectus repellendus? Necessitatibus ducimus optio officiis ullam
          porro laudantium nam voluptates repudiandae labore suscipit
          reprehenderit, non, praesentium, recusandae architecto illo. Dolorum,
          ab quaerat. Dicta nobis rerum quis illum natus. Vitae aspernatur quasi
          minima delectus dignissimos excepturi, consectetur facere laudantium
          consequuntur! Accusamus unde vitae atque odit laborum, ab at fuga
          voluptatum natus, quam non.
        </p>
      </div>
      <img className={styles.profilePic} src="/profile.jpg" alt="profile_pic" />
    </section>
  );
}
