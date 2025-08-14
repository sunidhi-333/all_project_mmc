import React, { useState } from 'react';
import MaleProducts from './components/maleproduct';
import FemaleProducts from './components/femaleproduct';
import KidsProducts from './components/kidsproduct';

function App() {
  const [productList] = useState([
    { pId: 1, pName: 'Men’s T-Shirt', pCategory: 'Male', pPrice: 25.99, pIsInStock: true },
    { pId: 2, pName: 'Women’s Dress', pCategory: 'Female', pPrice: 49.99, pIsInStock: true },
    { pId: 3, pName: 'Kids’ Sneakers', pCategory: 'Kids', pPrice: 29.99, pIsInStock: false },
    { pId: 4, pName: 'Men’s Jeans', pCategory: 'Male', pPrice: 39.99, pIsInStock: true },
    { pId: 5, pName: 'Women’s Handbag', pCategory: 'Female', pPrice: 59.99, pIsInStock: true },
    { pId: 6, pName: 'Kids’ Jacket', pCategory: 'Kids', pPrice: 34.99, pIsInStock: true },
    { pId: 7, pName: 'Men’s Watch', pCategory: 'Male', pPrice: 99.99, pIsInStock: false },
    { pId: 8, pName: 'Women’s Sandals', pCategory: 'Female', pPrice: 22.99, pIsInStock: true },
    { pId: 9, pName: 'Kids’ Toy Set', pCategory: 'Kids', pPrice: 19.99, pIsInStock: true },
    { pId: 10, pName: 'Men’s Hoodie', pCategory: 'Male', pPrice: 45.99, pIsInStock: true },
    { pId: 11, pName: 'Women’s Sunglasses', pCategory: 'Female', pPrice: 15.99, pIsInStock: false },
    { pId: 12, pName: 'Kids’ Backpack', pCategory: 'Kids', pPrice: 27.99, pIsInStock: true },
  ]);

  return (
    <div>
      <h1>🛍️ Shopping App</h1>
      <MaleProducts products={productList.filter(p => p.pCategory === 'Male')} />
      <FemaleProducts products={productList.filter(p => p.pCategory === 'Female')} />
      <KidsProducts products={productList.filter(p => p.pCategory === 'Kids')} />
    </div>
  );
}

export default App;