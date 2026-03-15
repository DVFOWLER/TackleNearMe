import React, { useState, useEffect } from 'react';
import { getProducts, fmtCurrency } from '../utils';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const filteredProducts = products.filter(p => {
    const matchCat = filter === 'all' || p.category.toLowerCase() === filter.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.product_id === product.id);
    
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ product_id: product.id, name: product.name, price: product.price, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    window.dispatchEvent(new Event('cartUpdate')); // Updates badge
  };

  return (
    <div className="shop-container">
      <div className="filter-bar">
        {['all', 'rods', 'reels', 'lures', 'merch'].map(cat => (
          <button 
            key={cat} 
            className={filter === cat ? 'active' : ''} 
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
        <input 
          type="text" 
          placeholder="Search gear..." 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map(p => (
          <div key={p.id} className={`product-card ${p.stock <= 0 ? 'soldout' : ''}`}>
            {p.stock <= 0 && <span className="soldout-label">Out of Stock</span>}
            <img src={p.image_url} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{fmtCurrency(p.price)}</p>
            <button disabled={p.stock <= 0} onClick={() => addToCart(p)}>
              {p.stock <= 0 ? 'Unavailable' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;