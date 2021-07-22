import { useState, useEffect } from "react"

function producto(id,nombre,stock,imagen){
    this.id=id; 
    this.nombre=nombre;
    this.stock=stock;
    this.imagen=imagen;
}

function Item({id,nombre,stock,imagen}){
    const articulo = new producto(id,nombre,stock,imagen)
    const [item,setItem]=useState(articulo)
useEffect(()=>{
  
   
    const task = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve = articulo
        },3000)

    })
    return task.then((resp)=>setItem(resp)).catch((err)=>{console.log("err")})
})
}
export default Item