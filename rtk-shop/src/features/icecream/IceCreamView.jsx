import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';
import { addItem } from '../cart/cartSlice'; // Import addItem from cartSlice
import '../icecream/icecream.css';

const IceCreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const handleAddIceCream = () => {
    dispatch(ordered());
    dispatch(addItem({ id: 2, name: 'Ice Cream' }));
  };

  const handleRestockIceCream = () => {
    dispatch(restocked(value));
  };

  const handleValueChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div>
      <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>
        Number of ice cream - {numOfIcecreams}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={handleAddIceCream}>Add to Cart</button>
        <input type="number" value={value} onChange={handleValueChange} />
        <button onClick={handleRestockIceCream}>Restock</button>
      </div>
    </div>
  );
};

export default IceCreamView;
