// src/pages/Inventory/Inventory.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInventory } from '../../store/inventorySlice';
import styles from './Inventory.module.css';

export default function Inventory() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  return (
    <div className={styles.inventoryContainer}>
      <h2>库存管理</h2>
      {loading && <p>加载中...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul className={styles.inventoryList}>
        {list.map((item) => (
          <li key={item.id} className={styles.inventoryItem}>
            <p>
              <strong>产品：</strong> {item.productName}
            </p>
            <p>
              <strong>库存数：</strong> {item.stock}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
