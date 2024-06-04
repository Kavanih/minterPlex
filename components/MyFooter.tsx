import React from "react";
import styles from "../styles/MyFooter.module.css";
import logo from "../images/trois.png";

export const MyFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <p className={styles.footerText}>
          Please reach out to us if you have any ideas or specific requests
        </p>
        <div className="flex items-center justify-center mb-4">
          <img
            src={logo.src}
            alt="Logo"
            style={{ height: "55px", marginRight: "0.5rem" }}
          />
          <a href="mailto:PitGoldIA@proton.me" className={styles.footerEmail}>
            PitGoldIA@proton.me
          </a>
        </div>
        <p className={styles.footerCopyright}>
          Copyright PITGOLDAI © 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};
