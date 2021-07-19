import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Emi from './components/Emi';
import { useState } from 'react';

function App() {
  const [hora, setHora] = useState(Date())
  const [state, setState] = useState(0);
  let productos = ["Productos","Zapatillas","Camisetas","Arqueros","Medias"]
  return (
    <>
    <NavBar />
    <ItemListContainer productos={productos} />
    
    </>
  )


  }
export default App
