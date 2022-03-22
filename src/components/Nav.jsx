import { useState } from "react";
import { Link } from "react-scroll";
import { MdMenuOpen, MdArrowForwardIos } from "react-icons/md";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > window.innerHeight) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <nav className={styles.container} id={isOpen ? styles.open : styles.closed}>
      <div id={styles.toggle} onClick={() => setIsOpen((prev) => !prev)}>
        <MdMenuOpen id={styles.menuIcon} />
      </div>
      <section id={styles.content}>
        {display && (
          <div className={styles.title}>
            <img className={styles.image} src="profile.jpg" alt="profile_pic" />
            <h1 className={styles.title__name}>Tyler Yates</h1>
            <h2>Web & Mobile Developer</h2>
          </div>
        )}
        <ul className={styles.navList}>
          <h1 className={styles.navList__header}>Go to Section</h1>
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
              <p>Tech</p>
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
