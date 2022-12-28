import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className={styles.mainnav}>
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
          <Link href={"/blogs"}>
            <li>Blogs</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
