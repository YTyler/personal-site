import styles from "../styles/Contact.module.css";
import { MdEmail, MdOutlineOpenInNew } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <section className="mainRow" id={styles.contactContainer}>
      <span id="contactScroller"></span>
      <h2 id={styles.contactHeader}>Contact</h2>
      <ul className={styles.contactLinks}>
        <li>
          <a
            href="mailto:tyates907@gmail.com"
            className={styles.contactItem}
            title="Send me an email!"
          >
            <MdEmail id={styles.mailIcon} />
            <p className={styles.contactLabel}>tyates907@gmail.com</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tyler-yates/"
            className={styles.contactItem}
            title="linkedin.com/in/tyler-yates"
          >
            <SiLinkedin id={styles.liIcon} />
            <p className={styles.contactLabel}>LinkedIn Profile</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/YTyler"
            className={styles.contactItem}
            title="github.com/YTyler"
          >
            <SiGithub id={styles.gitIcon} />
            <p className={styles.contactLabel}>My Github</p>
          </a>
        </li>
        <li>
          <a
            href="Yates-Resume.pdf"
            className={styles.contactItem}
            target="_blank"
            rel="noreferrer"
            title="Yates-Resume.pdf"
          >
            <MdOutlineOpenInNew />
            <p className={styles.contactLabel}>My Resume</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
