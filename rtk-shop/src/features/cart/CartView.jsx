import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from './CartSlice';

const CartView = () => {
  const [cakes, setCake] = useState('');
  const [icecream, setIcecrem] = useState('');
  const dispatch = useDispatch();
  // Inside a React component or container

  // Dispatch actions to add and remove items from the cart
  dispatch(addItem({ id: 1, name: 'Cake' }));
  dispatch(addItem({ id: 2, name: 'Ice Cream' }));
  dispatch(removeItem({ id: 1 }));

  // Dispatch action to clear the cart
  dispatch(clearCart());

  const cartItems = useSelector((state) => state.cart.items);
  console.log('🚀 ~ file: CartView.jsx:22 ~ CartView ~ cartItems:', cartItems);

  return (
    <div>
      <div>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartView;
