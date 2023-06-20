import React from "react";
import styles from "../Navbar/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="../assets/logo.png" alt="logo" height="100%" width="100%" />
        </div>
        <div className={styles.menuList}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/partner">Partner With Us</a>
          <a href="/blog">Blog</a>
        </div>
        <div className={styles.btn}>
          <button>Download ZET</button>
        </div>
          </nav>
          <hr/>
    </div>
  );
};

export default Navbar;
