import React from "react";
import {
  GiUsbKey,
  GiLockpicks,
  GiTwoHandedSword,
  GiSprint,
} from "react-icons/gi";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div className={"row " + styles.navContainer}>
      <div className={styles.buttton}>
        <GiUsbKey />
        <h2>Usb Key</h2>
      </div>
      <div>
        <GiTwoHandedSword />
        <h2>Two Handed Sword</h2>
      </div>
      <div>
        <GiSprint />
        <h2>Sprint</h2>
      </div>
      <div>
        <GiLockpicks />
        <h2>LockPicks</h2>
      </div>
    </div>
  );
}
