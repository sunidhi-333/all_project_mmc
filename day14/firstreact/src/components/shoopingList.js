import React from 'react';

const ShoppingList = () => {
  const products = [
    { pId: 101, pName: "Wireless Mouse", pType: "Electronics", pPrice: 25.99, PIsInStock: true },
    { pId: 102, pName: "Notebook", pType: "Stationery", pPrice: 3.49, PIsInStock: true },
    { pId: 103, pName: "Water Bottle", pType: "Home", pPrice: 12.99, PIsInStock: false },
    { pId: 104, pName: "Bluetooth Speaker", pType: "Electronics", pPrice: 45.00, PIsInStock: true },
    { pId: 105, pName: "Desk Lamp", pType: "Furniture", pPrice: 29.99, PIsInStock: false }
  ];

  return (
    <div>
      <h2>🛍️ Shopping List</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price ($)</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.pId}>
              <td>{product.pId}</td>
              <td>{product.pName}</td>
              <td>{product.pType}</td>
              <td>{product.pPrice.toFixed(2)}</td>
              <td>{product.PIsInStock ? "✅ Yes" : "❌ No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;