import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 
  return (
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
    </Route>
    </Switch>
    </Router>
  )

  }
export default App
