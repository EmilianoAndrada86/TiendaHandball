import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import CartContext from './components/Context/CartContext';

function App() {
 
 
  return (
    
    <CartContext>
    <Router>
    <NavBar />
    <Switch>
    <Route exact path="/">
    <ItemListContainer />
    </Route>
    <Route path="/category/:id">
    <ItemListContainer />
    </Route>
    <Route path="/item/:id">
    <ItemDetailContainer />
    </Route >
    <Route path="/cart"> 
    <Cart />
    </Route>
    </Switch>
    </Router>
    </CartContext>
      
    
    
  )

  }
export default App
