import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';
import './cake.css';

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(1);

  return (
    <div style={{}}>
      <div>
        <h2 style={{ fontSize: '3rem' }}>number of cakes - {numOfCakes}</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => dispatch(ordered())}>more cake </button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restocked(value))}>restock cake</button>
      </div>
    </div>
  );
};

export default CakeView;
