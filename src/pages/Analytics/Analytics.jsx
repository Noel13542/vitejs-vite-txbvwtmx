// src/pages/Analytics/Analytics.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyticsData } from '../../store/analyticsSlice';
import CommonCharts from '../../components/CommonCharts/CommonCharts';
import styles from './Analytics.module.css';

export default function Analytics() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalyticsData());
  }, [dispatch]);

  return (
    <div className={styles.analyticsContainer}>
      <h2>分析报告</h2>
      {loading && <p>加载中...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <CommonCharts chartData={data} />
    </div>
  );
}
