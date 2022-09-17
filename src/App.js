import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/> : <Login />}
          </Route>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
