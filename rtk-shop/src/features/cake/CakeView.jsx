import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  orderedCake,
  restockedCake,
  orderedRedVelvet,
  restockedRedVelvet,
} from './cakeSlice';
import './cake.css';

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfRedVelvet = useSelector((state) => state.cake.numOfRedVelvet);
  const dispatch = useDispatch();
  const [cakeValue, setCakeValue] = React.useState(1);
  const [redVelvetValue, setRedVelvetValue] = React.useState(1);

  return (
    <div style={{}}>
      <div>
        <h2 style={{ fontSize: '3rem' }}>
          number of carrot cakes - {numOfCakes}
        </h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => dispatch(orderedCake())}>more cake </button>
        <input
          type="number"
          value={cakeValue}
          onChange={(e) => setCakeValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restockedCake(cakeValue))}>
          restock cake
        </button>
      </div>
      <div>
        <h2 style={{ fontSize: '3rem' }}>
          number of red velvet cakes - {numOfRedVelvet}
        </h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => dispatch(orderedRedVelvet())}>more cake </button>
        <input
          type="number"
          value={redVelvetValue}
          onChange={(e) => setRedVelvetValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restockedRedVelvet(redVelvetValue))}>
          restock cake
        </button>
      </div>
    </div>
  );
};

export default CakeView;
