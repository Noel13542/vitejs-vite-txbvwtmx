// src/pages/Payment/Payment.jsx
import React from 'react';
import styles from './Payment.module.css';

export default function Payment() {
  return (
    <div className={styles.paymentContainer}>
      <h2>支付管理</h2>
      <p>这里可以处理订单付款、发票开具等流程。</p>
      <div className={styles.placeholder}>
        <p>用彩色方块表示支付流程图或展示图</p>
        <div className={styles.coloredBox} />
      </div>
    </div>
  );
}
