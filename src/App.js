import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Cart, NavBar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
