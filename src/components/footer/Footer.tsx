"use client";
import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h2>
            Sandex<span className={styles.primaryColor}>lizzy</span>
          </h2>
          <p className={styles.gray400}>Your one-stop shop for solar equipments.</p>
        </div>

        {/* Navigation Links */}
        <div className={styles.links}>
          <a href="#" className={styles.gray400}>Home</a>
          <a href="#" className={styles.gray400}>Shop</a>
          <a href="#" className={styles.gray400}>About</a>
          <a href="#" className={styles.gray400}>Contact</a>
        </div>

        {/* Social Media Links */}
        <div className={styles.social}>
          <a href="#" className={styles.gray400}>Facebook</a>
          <a href="#" className={styles.gray400}>Twitter</a>
          <a href="#" className={styles.gray400}>Instagram</a>
        </div>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} Sandexlizzy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
