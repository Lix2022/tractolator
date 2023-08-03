// components/LoadingOverlay.js
import React from 'react';
import styles from '../styles/LoadingOverlay.module.css'; // Create a CSS file to style the overlay

const LoadingOverlay = () => {
  return (
    
    <div className={styles.overlay}>
       <label className={styles.label}>Paghulat Kay Nag Loading Pako!</label>
      <div className={styles.loader}>
       
      </div>
    </div>
  );
};

export default LoadingOverlay;
