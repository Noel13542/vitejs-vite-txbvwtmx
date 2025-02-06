// src/services/mockApi.js

// ============= 模拟各种数据 =============
// 订单
let mockOrders = [
  {
    id: 1001,
    productName: 'Model 3 前挡风玻璃',
    supplier: '玻璃供应商A',
    quantity: 50,
    status: 'PENDING'
  },
  {
    id: 1002,
    productName: 'Model S 方向盘',
    supplier: '零件供应商B',
    quantity: 20,
    status: 'SHIPPED'
  },
  {
    id: 1003,
    productName: 'Model X 智能中控屏',
    supplier: '供应商C',
    quantity: 10,
    status: 'DELIVERED'
  }
];

// 采购信息
const mockProcurements = [
  {
    id: 'P-100',
    supplier: '电池供应商D',
    items: [
      { name: '锂电池', quantity: 100 },
      { name: '保护板', quantity: 20 }
    ],
    status: 'IN_PROGRESS'
  },
  {
    id: 'P-101',
    supplier: '钢材供应商E',
    items: [{ name: '底盘钢板', quantity: 200 }],
    status: 'COMPLETED'
  }
];

// 库存
const mockInventory = [
  {
    id: 'I-001',
    productName: 'Model 3 前挡风玻璃',
    stock: 120
  },
  {
    id: 'I-002',
    productName: 'Model S 方向盘',
    stock: 35
  },
  {
    id: 'I-003',
    productName: 'Model X 智能中控屏',
    stock: 15
  }
];

// 物流信息
const mockLogistics = [
  {
    shipmentId: 'S-001',
    destination: '上海工厂',
    status: 'IN_TRANSIT'
  },
  {
    shipmentId: 'S-002',
    destination: '美国加州工厂',
    status: 'DELIVERED'
  }
];

// 分析数据
const mockAnalyticsData = [
  {
    date: '2025-01-01',
    totalOrders: 100,
    revenue: 300000
  },
  {
    date: '2025-02-01',
    totalOrders: 120,
    revenue: 350000
  }
];

// 动态表单配置示例
export const formConfig = [
  {
    type: 'text',
    id: 'searchKey',
    label: '搜索关键词'
  },
  {
    type: 'select',
    id: 'statusFilter',
    label: '状态筛选',
    options: [
      { value: '', label: '全部' },
      { value: 'PENDING', label: '待处理' },
      { value: 'SHIPPED', label: '已发货' },
      { value: 'DELIVERED', label: '已送达' }
    ]
  },
  {
    type: 'button',
    id: 'searchBtn',
    label: '查询'
  }
];

// ============= 模拟请求 =============
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function mockFetchData(dataType) {
  await delay(400); // 模拟网络延迟
  switch (dataType) {
    case 'orders':
      return [...mockOrders];
    case 'procurements':
      return mockProcurements;
    case 'inventory':
      return mockInventory;
    case 'logistics':
      return mockLogistics;
    case 'analytics':
      return mockAnalyticsData;
    default:
      return [];
  }
}

// 模拟新增订单
export async function addOrderMock(newOrder) {
  await delay(300);
  const nextId = Math.max(...mockOrders.map((o) => o.id)) + 1;
  const order = { id: nextId, status: 'PENDING', ...newOrder };
  mockOrders = [...mockOrders, order];
  return [...mockOrders];
}
