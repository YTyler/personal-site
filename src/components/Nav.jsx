import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={styles.navContainer}
      id={isOpen ? styles.navOpen : styles.navClosed}
    >
      <div id={styles.toggle} onClick={() => setIsOpen((prev) => !prev)}>
        <MdMenuOpen id={styles.menuIcon} />
      </div>
      <section className="top">
        <img
          className={styles.profilePic}
          src="profile.jpg"
          alt="profile_pic"
        />
        <div className={styles.title}>
          <h1>Tyler Yates</h1>
          <h2>Web & Native Development</h2>
        </div>
      </section>
    </nav>
  );
}
