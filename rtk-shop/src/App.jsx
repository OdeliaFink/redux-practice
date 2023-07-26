import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CakeView from '../../rtk-shop/src/features/cake/CakeView';
import IceCreamView from '../../rtk-shop/src/features/icecream/IceCreamView';
import UserView from '../../rtk-shop/src/features/user/UserView';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <CakeView />
        <IceCreamView />
        <UserView />
      </div>
    </>
  );
}

export default App;
