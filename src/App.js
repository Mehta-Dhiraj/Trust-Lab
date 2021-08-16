import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Medicine from './components/Medicines/Medicine';

function App() {

  const [cartIsShown, setCartIsShown] = useState(true);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Medicine />
      </main>
    </Fragment>
  );
}

export default App;
