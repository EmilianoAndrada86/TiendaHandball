import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import './App.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
  

  return (
    <>
    <NavBar />
    <ItemListContainer producto1={"Zapatillas"} producto2={"Remeras"} producto3={"Pantalones"} producto4={"Arqueros"} producto5={"Pelotas"}/>
  </>
  );
}

export default App;
