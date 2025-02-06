// src/pages/Approval/Approval.jsx
import React from 'react';
import styles from './Approval.module.css';

export default function Approval() {
  return (
    <div className={styles.approvalContainer}>
      <h2>审批中心</h2>
      <p>这里可查看待审批的订单或采购单，进行审批操作</p>

      <div className={styles.placeholderBox}>
        <p>审批流程图示意</p>
        <div className={styles.square} />
      </div>
    </div>
  );
}
