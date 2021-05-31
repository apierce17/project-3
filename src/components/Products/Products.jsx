import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import Carousel from '../Carousel';
import Mission from '../Mission';
import './Products.css';

const Products = ({ products, onAddToCart }) => {

  if (!products.length) return <p>Loading...</p>;

  return (
    <section id="products">
    <Carousel />
      <div className="container pt-5" />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    <Mission />
    </section>
  );
};

export default Products;

