import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Medicine from './components/Medicines/Medicine';
import CartProvider from './store/CartProvider';
import {Route} from 'react-router-dom'
import Feature from './components/others/Feature';
import Product from './components/others/Product';
import Login from './components/Admin/Login';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <CartProvider>
      <Route path='/home'>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Medicine />
        </main>
      </Route>
      <Route path='/feature'>
        <Feature />
      </Route>
      <Route path='/product'>
        <Product />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </CartProvider>
  );
}

export default App;
