import { useState } from "react";
import { createContext } from "react"

export const CContext = createContext();

export default function CartContext({children}){
    const [carrito, setCarrito] = useState([]);
    
    const isInCart = (id)=>{
        if(carrito.find(obj=>obj.item.id===id))return true
        else return false
    }
    function addItem(item,cant){
        
     isInCart(item.id)? alert("Ya esta el producto en el carro de compras"):carrito.push({item,cant})
    }
    function clearItems(){
        setCarrito([])
    }





    return(
        <CContext.Provider value={{carrito,addItem,clearItems}}>
            {children}
        </CContext.Provider>

    )

}