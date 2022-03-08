import styles from "../styles/Contact.module.css";
import { MdEmail, MdOutlineOpenInNew } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <section className="mainRow" id={styles.container}>
      <span id="contactScroller"></span>
      <h2 id={styles.header}>Contact</h2>
      <ul className={styles.links}>
        <li>
          <a
            href="mailto:tyates907@gmail.com"
            className={styles.item}
            title="Send me an email!"
          >
            <MdEmail class={styles.darkIcon} />
            <p className={styles.label}>tyates907@gmail.com</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tyler-yates/"
            className={styles.item}
            title="linkedin.com/in/tyler-yates"
          >
            <SiLinkedin id={styles.liIcon} />
            <p className={styles.label}>LinkedIn Profile</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/YTyler"
            className={styles.item}
            title="github.com/YTyler"
          >
            <SiGithub class={styles.darkIcon} />
            <p className={styles.label}>My Github</p>
          </a>
        </li>
        <li>
          <a
            href="Yates-Resume.pdf"
            className={styles.item}
            target="_blank"
            rel="noreferrer"
            title="Yates-Resume.pdf"
          >
            <MdOutlineOpenInNew class={styles.darkIcon} />
            <p className={styles.label}>My Resume</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
