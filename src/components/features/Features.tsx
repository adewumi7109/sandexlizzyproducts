import React from "react";
import styles from "./features.module.css";
import { FaGift, FaTruck } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { HiChevronDoubleRight } from "react-icons/hi";

function Features() {
  return (
    <div className="wrapper">
      <div className={styles.cont}>
        <div>
          <FaTruck className={styles.icon} />
          <p>
            Free Delivery in Akure <br />
           <span> For Order Above N100,000</span>
          </p>
        </div>
        <div>
          <FiRefreshCcw className={styles.icon} />
          <p>
            Pay On Delivery <br />
           <span> Akure Only</span>
          </p>
        </div>
        <div>
          <HiChevronDoubleRight className={styles.icon}/>
          <p>
            Fast Shipping <br /><span>1 - 3 Days</span>
          </p>
        </div>
        <div>
          <FaGift className={styles.icon}/>
          <p>
          Lowest Price <br /><span>Best Deals</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
