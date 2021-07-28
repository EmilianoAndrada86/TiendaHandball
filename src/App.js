import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import productos from'./articulos.json'
import { useState } from 'react';

function App() {
 
  return (
    <>
    <NavBar />
    <h1>Hola</h1>
    <ItemListContainer productos={productos} />
    </>
  )

  }
export default App
