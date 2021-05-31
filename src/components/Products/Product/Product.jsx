import React from 'react';
import './Product.css';

const Product = ({ product, onAddToCart }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div className="container text-center pb-5">
      <img className="product-img " src={product.media.source} alt=""/>
      <div>
        <div className="text-center">
          <h5>
            {product.name}
          </h5>
          <p>
            ${product.price.formatted}
          </p>
        </div>
        
      </div>
      <div disableSpacing className="pb-3 border-bottom">
        <div aria-label="Add to Cart" onClick={handleAddToCart}>
          <i class="pointer fas fa-cart-plus fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;

