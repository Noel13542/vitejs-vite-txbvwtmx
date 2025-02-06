// src/pages/Procurement/Procurement.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProcurements } from '../../store/procurementSlice';
import styles from './Procurement.module.css';

export default function Procurement() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.procurement);

  useEffect(() => {
    dispatch(fetchProcurements());
  }, [dispatch]);

  return (
    <div className={styles.procurementContainer}>
      <h2>采购管理</h2>
      {loading && <p>加载中...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={styles.procurementList}>
        {list.map((p) => (
          <div key={p.id} className={styles.procurementCard}>
            <h3>采购单号：{p.id}</h3>
            <p>供应商：{p.supplier}</p>
            <p>状态：{p.status}</p>
            <ul>
              {p.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
