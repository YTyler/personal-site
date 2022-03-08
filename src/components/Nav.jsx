import { useState } from "react";
import { Link } from "react-scroll";
import { MdMenuOpen } from "react-icons/md";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.container} id={isOpen ? styles.open : styles.closed}>
      <div id={styles.toggle} onClick={() => setIsOpen((prev) => !prev)}>
        <MdMenuOpen id={styles.menuIcon} />
      </div>
      <section className="top">
        <img className={styles.image} src="profile.jpg" alt="profile_pic" />
        <h1 className={styles.title}>Tyler Yates</h1>
        <ul className={styles.navList}>
          <li className={styles.scrollLink}>
            <Link to="homeScroller" spy={true} smooth={true} offset={-100}>
              Home
            </Link>
          </li>
          <li className={styles.scrollLink}>
            <Link to="projectScroller" spy={true} smooth={true}>
              Projects
            </Link>
          </li>
          <li className={styles.scrollLink}>
            <Link to="techScroller" spy={true} smooth={true}>
              Technology
            </Link>
          </li>
          <li className={styles.scrollLink}>
            <Link to="contactScroller" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
