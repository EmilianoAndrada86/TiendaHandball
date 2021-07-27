import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
const GetITem=(key)=>{
    const [desc,setDesc] = useState("no hay descripcion");
    
            fetch("http://localhost:4000/articulos")
            .then((data)=>data.json())
            .then((res)=>{res.map((producto)=>{setTimeout(()=>{if(producto.id===key){setDesc(producto.desc)}})},2000)})
             return desc
        }
             

function ItemDetailContainer(props){

    return(
    <ItemDetail detalle={GetITem(props.id)} />

)



}

export default ItemDetailContainer

//(producto)=>{if(producto.id===key){return producto.desc}else{return "No hay descripcion"}})