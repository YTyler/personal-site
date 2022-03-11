import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MdMenuOpen, MdArrowForwardIos } from "react-icons/md";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [titleDisplay, setTitleDisplay] = useState({});

  window.onscroll = () => {
    if (window.scrollY > window.innerHeight) {
      setTitleDisplay({ display: "inherit" });
    } else {
      setTitleDisplay({ display: "none" });
    }
  };

  return (
    <nav className={styles.container} id={isOpen ? styles.open : styles.closed}>
      <div id={styles.toggle} onClick={() => setIsOpen((prev) => !prev)}>
        <MdMenuOpen id={styles.menuIcon} />
      </div>
      <section id={styles.content}>
        <img className={styles.image} src="profile.jpg" alt="profile_pic" />
        <div className={styles.title} style={titleDisplay}>
          <h1
            className={styles.title__name}
            onClick={() => console.log(window.scrollY)}
          >
            Tyler Yates
          </h1>
          <h2>Web & Mobile Developer</h2>
        </div>
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
