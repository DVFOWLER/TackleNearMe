export const fmtCurrency = (n) => `₱${Number(n).toLocaleString('en-PH')}`;

export const getProducts = () => JSON.parse(localStorage.getItem('products') || '[]');
export const setProducts = (arr) => localStorage.setItem('products', JSON.stringify(arr));

export const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');
export const setCart = (c) => localStorage.setItem('cart', JSON.stringify(c));

export const generateOrderId = () => {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const nextIdNumber = orders.length + 1;
  return `TNM-${nextIdNumber.toString().padStart(4, '0')}`;
};