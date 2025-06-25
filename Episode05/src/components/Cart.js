import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../Store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items || []);
  const totalItems = useSelector((store) => store.cart.totalItems || 0);
  const totalPrice = useSelector((store) => store.cart.totalPrice || 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <button className="cart-clear-btn" onClick={() => dispatch(clearCart())} disabled={items.length === 0}>
        Clear Cart
      </button>
      <div className="cart-summary">
        <span>Total Items: {totalItems}</span>
        <span>Total Price: ₹{totalPrice}</span>
      </div>
      <ul className="cart-items-list">
        {items.length === 0 ? (
          <li className="cart-empty">Your cart is empty.</li>
        ) : (
          items.map((item) => (
            <li className="cart-item" key={item.id}>
              <div className="cart-item-info">{item.name} - ₹{item.price}</div>
              <button className="cart-remove-btn" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart