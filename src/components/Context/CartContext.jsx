import { useState } from "react";
import { createContext } from "react"
import Item from "../Item";
export const Context = createContext();

export default function CartContext({children}){
    const [carrito, setCarrito] = useState([]);
    
    const isInCart = (id)=>{
        if(carrito.producto.find(obj=>obj.id===id))return true
        else return false
    }
    const addItem =(cant)=>{
        console.log("Agregaste Item")
     /* let  Item={
            "producto":{
                "id":item.id,
                "nombre":item.nombre,
                "stock":item.stock,
                "url":item.url,
                "desc":item.desc,
                "cat":item.cant,
                "nomcat": item.nomcat
            },
            "cant":cant
        }
    console.log(Item)
    isInCart(item.id)? alert("El producto ya a sido agregado al carrito"):carrito.push(Item)*/
    }
    const clearItems = ()=>{
        setCarrito([])
    }





    return(
        <Context.Provider value={{addItem,clearItems,carrito}}>
            {children}
        </Context.Provider>

    )

}