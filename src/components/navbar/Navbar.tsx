"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className={styles.introBanner}>
        <div className="wrapper">
          <div>
            Welcome to our new exciting website! We remain the same Sandexlizzy
            world global limited.
          </div>
        </div>
      </div>

      <div className={styles.navCont}>
        <div className="wrapper">
          <div className={styles.mainNav}>
            <div className={styles.logo}>SANDEXLIZZY</div>

            <div className={styles.searchBar}>
              <form action="">
                <input type="text" />
                <button>
                  <FaSearch size={20} />
                </button>
              </form>
            </div>

            {/* <div className={styles.contWrapper}>
              <a
                href="https://wa.me/2348036026669"
                target="_blank"
                rel="noopener noreferrer"
              >
                08036026669
              </a>
            </div> */}

            {/* Hamburger */}
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <div
        className={`${styles.navItems} ${menuOpen ? styles.showMenu : ""}`}
      >
        <div className="wrapper">
          <ul>
            <li>
              <a href="#">Solar Products</a>
            </li>
            <li>
              <a href="#">Electronics</a>
            </li>
          </ul>
        </div>
      </div>
    <div className="wrapper">
    <div  className={styles.msearchBar}>
              <form action="">
                <input type="text" />
                <button>
                  <FaSearch size={20} />
                </button>
              </form> 
            </div>
    </div>
    </nav>
  );
}

export default Navbar;
