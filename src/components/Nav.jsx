import { useState } from "react";
import { Link } from "react-scroll";
import { MdMenuOpen, MdArrowForwardIos } from "react-icons/md";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.container} id={isOpen ? styles.open : styles.closed}>
      <div id={styles.toggle} onClick={() => setIsOpen((prev) => !prev)}>
        <MdMenuOpen id={styles.menuIcon} />
      </div>
      <section id={styles.content}>
        <img className={styles.image} src="profile.jpg" alt="profile_pic" />
        <h1 className={styles.title}>Tyler Yates</h1>
        <ul className={styles.navList}>
          <Link to="homeScroller" spy={true} smooth={true} offset={-100}>
            <li
              className={`${styles.scrollLink} selectable`}
              onClick={() => setIsOpen(false)}
            >
              <p>Home</p>
              <MdArrowForwardIos className={styles.arrow} />
            </li>
          </Link>
          <Link to="projectScroller" spy={true} smooth={true} offset={-5}>
            <li
              className={`${styles.scrollLink} selectable`}
              onClick={() => setIsOpen(false)}
            >
              <p>Projects</p>
              <MdArrowForwardIos className={styles.arrow} />
            </li>
          </Link>
          <Link to="techScroller" spy={true} smooth={true} offset={-25}>
            <li
              className={`${styles.scrollLink} selectable`}
              onClick={() => setIsOpen(false)}
            >
              <p>Technologies</p>
              <MdArrowForwardIos className={styles.arrow} />
            </li>
          </Link>
          <Link to="contactScroller" spy={true} smooth={true} offset={-25}>
            <li
              className={`${styles.scrollLink} selectable`}
              onClick={() => setIsOpen(false)}
            >
              <p>Contact</p>
              <MdArrowForwardIos className={styles.arrow} />
            </li>
          </Link>
        </ul>
      </section>
    </nav>
  );
}
