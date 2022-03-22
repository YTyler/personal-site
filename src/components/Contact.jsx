import styles from "../styles/Contact.module.css";
import { MdEmail, MdOutlineOpenInNew } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <section className="mainRow" id={styles.container}>
      <span id="contactScroller"></span>
      <h2 id={styles.header}>Contact Info</h2>
      <ul className={styles.links}>
        <li>
          <a
            href="mailto:tyates907@gmail.com"
            className={`${styles.item} selectable`}
            title="Send me an email!"
          >
            <MdEmail className={styles.darkIcon} />
            <p className={styles.label}>Email Me!</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tyler-yates/"
            className={`${styles.item} selectable`}
            title="linkedin.com/in/tyler-yates"
          >
            <SiLinkedin id={styles.liIcon} />
            <p className={styles.label}>My LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/YTyler"
            className={`${styles.item} selectable`}
            title="github.com/YTyler"
          >
            <SiGithub className={styles.darkIcon} />
            <p className={styles.label}>My Github</p>
          </a>
        </li>
        <li>
          <a
            href="Yates-Resume.pdf"
            className={`${styles.item} selectable`}
            target="_blank"
            rel="noreferrer"
            title="Yates-Resume.pdf"
          >
            <MdOutlineOpenInNew className={styles.darkIcon} />
            <p className={styles.label}>My Resume</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
