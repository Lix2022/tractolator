import React from "react";
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.contentWrapper}>
          <p>© {new Date().getFullYear()}  All Rights Reserved @Tractolator.com</p>
          <p className={styles.lablelPowered}>Powered by: Glix Dev</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;