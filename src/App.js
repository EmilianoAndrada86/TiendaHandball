import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

function App() {
 
  let productos = ["Zapatillas","Camisetas","Arqueros","Medias"]
  return (
    <>
    <NavBar />
    <ItemListContainer productos={productos} />
    
    </>
  )


  }
export default App
