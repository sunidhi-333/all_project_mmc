import React from 'react';

function MaleProducts({ products }) {
  return (
    <div>
      <h2>👔 Male Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.pId}>
            {product.pName} - ${product.pPrice} - {product.pIsInStock ? 'In Stock' : 'Out of Stock'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaleProducts;