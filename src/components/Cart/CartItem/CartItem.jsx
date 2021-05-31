import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className="cart-item text-center">
      <img src={item.media.source} alt={item.name} className="" />
      <div className="">
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
      </div>
      <CardActions className="">
        <div className="text-center mx-auto">
          <button className="btn btn-success" type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <button className="btn btn-secondary" type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
        </div>
      </CardActions>
    </div>
  );
};

export default CartItem;
