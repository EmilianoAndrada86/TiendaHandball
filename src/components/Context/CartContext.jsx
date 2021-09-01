import { useState } from "react";
import { createContext } from "react"

export const CContext = createContext();

export default function CartContext({children}){
    const[auxCarrito, setAuxCarrito] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [contador,setContador] = useState(0);
    
    const isInCart = (id)=>{
        if(carrito.find(obj=>obj.item.id===id))return true
        else return false
    }
    function addItem(item,cant){
        
     if(isInCart(item.id)) {
        alert("Ya esta el producto en el carro de compras")
     }else{
        auxCarrito.push({item,cant})
        setCarrito(auxCarrito)
        setContador(contador+1)
    }
    }
    function clearItems(){
        setCarrito([])
        setAuxCarrito([])
        setContador(0)
    }
   
   

    return(
        <CContext.Provider value={{carrito,addItem,clearItems,contador}}>
            {children}
        </CContext.Provider>

    )

}