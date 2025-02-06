// src/pages/Logistics/Logistics.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogistics } from '../../store/logisticsSlice';
import styles from './Logistics.module.css';

export default function Logistics() {
  const dispatch = useDispatch();
  const { shipments, loading, error } = useSelector((state) => state.logistics);

  useEffect(() => {
    dispatch(fetchLogistics());
  }, [dispatch]);

  return (
    <div className={styles.logisticsContainer}>
      <h2>物流管理</h2>
      {loading && <p>加载中...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={styles.shipments}>
        {shipments.map((s) => (
          <div key={s.shipmentId} className={styles.shipmentCard}>
            <p>
              <strong>运单号：</strong> {s.shipmentId}
            </p>
            <p>
              <strong>目的地：</strong> {s.destination}
            </p>
            <p>
              <strong>状态：</strong> {s.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
