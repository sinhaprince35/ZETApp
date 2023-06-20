import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="../assets/logo.png" alt="logo" height="100%" width="100%" />
        </div>
        <div className={styles.menuList}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/partner">Partner With Us</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className={styles.btn}>
          <button>Download ZET</button>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
