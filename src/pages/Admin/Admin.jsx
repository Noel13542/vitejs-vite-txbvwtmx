// src/pages/Admin/Admin.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserRole } from '../../store/userSlice';
import styles from './Admin.module.css';

export default function Admin() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleRoleChange = (e) => {
    dispatch(setUserRole(e.target.value));
  };

  return (
    <div className={styles.adminContainer}>
      <h2>系统管理</h2>
      <div className={styles.userInfo}>
        <p>当前用户：{currentUser.username}</p>
        <p>当前角色：{currentUser.role}</p>
      </div>

      <label>切换角色：</label>
      <select value={currentUser.role} onChange={handleRoleChange}>
        <option value="admin">admin</option>
        <option value="manager">manager</option>
        <option value="viewer">viewer</option>
      </select>

      <p className={styles.tip}>
        不同角色可拥有不同权限，比如只能查看/审批/新建订单等
      </p>
    </div>
  );
}
