// src/components/CommonCharts/CommonCharts.jsx
import React from 'react';
import styles from './CommonCharts.module.css';

export default function CommonCharts({ chartData }) {
  if (!chartData || chartData.length === 0) {
    return <p>暂无分析数据</p>;
  }

  // 这里仅做演示，用方块/文字模拟图表
  return (
    <div className={styles.chartsContainer}>
      <h3>图表模拟</h3>
      <div className={styles.chartPlaceholder}>
        {chartData.map((item, idx) => (
          <div key={idx} className={styles.chartBar} style={{ height: `${item.totalOrders}px` }}>
            <span className={styles.chartLabel}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
