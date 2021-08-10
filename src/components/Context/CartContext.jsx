import { useState } from "react";
import { createContext } from "react"

export const CContext = createContext();

export default function CartContext({children}){
    const[auxCarrito, setAuxCarrito] = useState([]);
    const [carrito, setCarrito] = useState([]);
    
    const isInCart = (id)=>{
        if(carrito.find(obj=>obj.item.id===id))return true
        else return false
    }
    function addItem(item,cant){
        
     isInCart(item.id)? alert("Ya esta el producto en el carro de compras"):auxCarrito.push({item,cant})
     setCarrito(auxCarrito)

    }
    function clearItems(){
        setCarrito([])
        setAuxCarrito([])
    }

    return(
        <CContext.Provider value={{carrito,addItem,clearItems}}>
            {children}
        </CContext.Provider>

    )

}