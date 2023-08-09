import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CakeView from '../../rtk-shop/src/features/cake/CakeView';
import IceCreamView from '../../rtk-shop/src/features/icecream/IceCreamView';
import UserView from '../../rtk-shop/src/features/user/UserView';
import Home from './Home';
import Nav from './Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Nav />
        <Home />
        <CakeView />
        <IceCreamView />
        <UserView />
      </div>
    </>
  );
}

export default App;
