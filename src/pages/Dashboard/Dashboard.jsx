// src/pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/ordersSlice';
import { fetchInventory } from '../../store/inventorySlice';
import { fetchProcurements } from '../../store/procurementSlice';
import { fetchLogistics } from '../../store/logisticsSlice';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const inventory = useSelector((state) => state.inventory.list);
  const procurement = useSelector((state) => state.procurement.list);
  const logistics = useSelector((state) => state.logistics.shipments);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchInventory());
    dispatch(fetchProcurements());
    dispatch(fetchLogistics());
    setTimeout(() => setFadeIn(true), 100);
  }, [dispatch]);

  return (
    <div className={`${styles.dashboardContainer} ${fadeIn ? styles.fadeIn : ''}`}>
      <h2>特斯拉供应链仪表盘</h2>
      <div className={styles.metrics}>
        <div className={styles.metricCard}>
          <h3>订单总数</h3>
          <p>{orders.length}</p>
        </div>
        <div className={styles.metricCard}>
          <h3>库存品类</h3>
          <p>{inventory.length}</p>
        </div>
        <div className={styles.metricCard}>
          <h3>采购任务</h3>
          <p>{procurement.length}</p>
        </div>
        <div className={styles.metricCard}>
          <h3>物流运输</h3>
          <p>{logistics.length}</p>
        </div>
      </div>

      <div className={styles.placeholderImages}>
        {/* 占位图示例 */}
        <img
          src="https://via.placeholder.com/150/ff0000/FFFFFF?text=LOGO"
          alt="Placeholder 1"
        />
        <img
          src="https://via.placeholder.com/150/00ff00/FFFFFF?text=CHART"
          alt="Placeholder 2"
        />
        <img
          src="https://via.placeholder.com/150/0000ff/FFFFFF?text=DATA"
          alt="Placeholder 3"
        />
      </div>
    </div>
  );
}
