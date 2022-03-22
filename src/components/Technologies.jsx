import styles from "../styles/Technologies.module.css";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiAmazonaws,
  SiJest,
  SiExpo,
  SiJava,
} from "react-icons/si";

export default function Technologies() {
  return (
    <section className="mainRow" id={styles.section}>
      <span id="techScroller"></span>
      <h2 className="sectionHeader">Technologies</h2>
      <ul className={styles.techIcons}>
        <li className={styles.icon}>
          <a href="https://www.javascript.com/" title="javascript.com">
            <SiJavascript id={styles.jsIcon} />
            <p className={styles.label}>Javascript</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://www.typescriptlang.org/" title="typescript home">
            <SiTypescript id={styles.tsIcon} />
            <p className={styles.label}>TypeScript</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://jestjs.io/" title="jest home">
            <SiJest id={styles.jestIcon} />
            <p className={styles.label}>Jest</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://reactjs.org/" title="react home">
            <SiReact id={styles.reactIcon} />
            <p className={styles.label}>React</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://redux.js.org/" title="redux home">
            <SiRedux id={styles.reduxIcon} />
            <p className={styles.label}>Redux</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://expo.dev/" title="expo home">
            <SiExpo id={styles.exIcon} />
            <p className={styles.label}>Expo</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://dev.java/" title="java for developers">
            <SiJava id={styles.javaIcon} />
            <p className={styles.label}>Java</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://aws.amazon.com/">
            <SiAmazonaws id={styles.awsIcon} />
            <p className={styles.label}>Amazon</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
