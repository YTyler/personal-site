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
    <section className="mainRow">
      <span id="techScroller"></span>
      <h2 className="sectionHeader">Technologies</h2>
      <ul className={styles.techIcons}>
        <li className={styles.icon}>
          <a href="https://www.javascript.com/" title="javascript.com">
            <SiJavascript id={styles.jsIcon} />
            <p className={styles.iconLabel}>Javascript</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://www.typescriptlang.org/" title="typescript home">
            <SiTypescript id={styles.tsIcon} />
            <p className={styles.iconLabel}>TypeScript</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://jestjs.io/" title="jest home">
            <SiJest id={styles.jestIcon} />
            <p className={styles.iconLabel}>Jest</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://reactjs.org/" title="react home">
            <SiReact id={styles.reactIcon} />
            <p className={styles.iconLabel}>React</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://redux.js.org/" title="redux home">
            <SiRedux id={styles.reduxIcon} />
            <p className={styles.iconLabel}>Redux</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://expo.dev/" title="expo home">
            <SiExpo id={styles.exIcon} />
            <p className={styles.iconLabel}>Expo</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://dev.java/" title="java for developers">
            <SiJava id={styles.javaIcon} />
            <p className={styles.iconLabel}>Java</p>
          </a>
        </li>
        <li className={styles.icon}>
          <a href="https://aws.amazon.com/">
            <SiAmazonaws id={styles.awsIcon} />
            <p className={styles.iconLabel}>Amazon</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
