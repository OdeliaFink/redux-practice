import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';
import '../icecream/icecream.css';

const IceCreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(1);
  return (
    <div>
      <h2 style={{ fontSize: '3rem' }}>
        number of ice cream - {numOfIcecreams}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => dispatch(ordered())}>more ice cream</button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restocked(value))}>
          restock ice cream
        </button>
      </div>
    </div>
  );
};

export default IceCreamView;
