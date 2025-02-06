// src/components/AnimatedModal/AnimatedModal.jsx
import React from 'react';
import styles from './AnimatedModal.module.css';

export default function AnimatedModal({ visible, onClose, children }) {
  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return (
    <div
      className={`${styles.modalOverlay} ${visible ? styles.show : ''}`}
      onClick={handleClickOverlay}
    >
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}
