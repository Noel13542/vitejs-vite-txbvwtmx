// src/pages/Orders/Orders.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, placeOrder } from '../../store/ordersSlice';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import { formConfig } from '../../services/mockApi';
import AnimatedModal from '../../components/AnimatedModal/AnimatedModal';
import ShadowButton from '../../components/ShadowExample/ShadowButton';
import styles from './Orders.module.css';

export default function Orders() {
  const dispatch = useDispatch();
  const { list: orders, loading } = useSelector((state) => state.orders);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // 新订单数据
  const [newOrder, setNewOrder] = useState({
    productName: '',
    supplier: '',
    quantity: ''
  });

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  // 父级事件委托
  const handleTableClick = (e) => {
    const row = e.target.closest('tr[data-orderid]');
    if (row) {
      const orderId = row.getAttribute('data-orderid');
      alert(`点击订单 ID: ${orderId}`);
    }
  };

  // 动态表单搜索
  const handleSearch = (values) => {
    const { searchKey, statusFilter } = values;
    let result = [...orders];

    if (searchKey) {
      result = result.filter(
        (o) =>
          o.productName.includes(searchKey) ||
          o.supplier.includes(searchKey)
      );
    }
    if (statusFilter) {
      result = result.filter((o) => o.status === statusFilter);
    }
    setFilteredOrders(result);
  };

  const openNewOrderModal = () => {
    setShowModal(true);
  };

  const closeNewOrderModal = () => {
    setShowModal(false);
  };

  const handleNewOrderChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({ ...prev, [name]: value }));
  };

  const submitNewOrder = async () => {
    if (!newOrder.productName || !newOrder.supplier || !newOrder.quantity) {
      alert('请完善订单信息');
      return;
    }
    await dispatch(
      placeOrder({
        productName: newOrder.productName,
        supplier: newOrder.supplier,
        quantity: Number(newOrder.quantity)
      })
    );
    closeNewOrderModal();
  };

  return (
    <div className={styles.ordersContainer}>
      <h2>订单管理</h2>
      <DynamicForm onSubmit={handleSearch} config={formConfig} />

      <div className={styles.actions}>
        <button className={styles.newOrderButton} onClick={openNewOrderModal}>
          创建新订单
        </button>

        {/* Shadow DOM 按钮示例 */}
        <ShadowButton label="Shadow DOM 按钮" />
      </div>

      {loading && <p>加载中...</p>}

      <table className={styles.ordersTable} onClick={handleTableClick}>
        <thead>
          <tr>
            <th>订单ID</th>
            <th>产品名称</th>
            <th>供应商</th>
            <th>数量</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} data-orderid={order.id}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>{order.supplier}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <AnimatedModal visible={showModal} onClose={closeNewOrderModal}>
        <div className={styles.modalContent}>
          <h3>创建新订单</h3>
          <div className={styles.formGroup}>
            <label>产品名称</label>
            <input
              type="text"
              name="productName"
              value={newOrder.productName}
              onChange={handleNewOrderChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>供应商</label>
            <input
              type="text"
              name="supplier"
              value={newOrder.supplier}
              onChange={handleNewOrderChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>数量</label>
            <input
              type="number"
              name="quantity"
              value={newOrder.quantity}
              onChange={handleNewOrderChange}
            />
          </div>
          <div className={styles.modalActions}>
            <button onClick={closeNewOrderModal}>取消</button>
            <button onClick={submitNewOrder}>提交</button>
          </div>
        </div>
      </AnimatedModal>
    </div>
  );
}
