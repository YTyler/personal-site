import React from "react";
import {
  GiUsbKey,
  GiLockpicks,
  GiTwoHandedSword,
  GiSprint,
} from "react-icons/gi";
import NavButton from "./NavButton";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={`row ${styles.navContainer}`}>
      <NavButton text="Usb Key">
        <GiUsbKey />
      </NavButton>
      <NavButton text="Lockpicks">
        <GiLockpicks />
      </NavButton>
      <NavButton text="Two Handed Sword">
        <GiTwoHandedSword />
      </NavButton>
      <NavButton text="Sprint">
        <GiSprint />
      </NavButton>
    </nav>
  );
}
