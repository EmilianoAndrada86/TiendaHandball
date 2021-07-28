import { useState } from 'react';
import productos from'../articulos.json'
import Item from './Item';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'

function GetKey(){
    let {id} = useParams()
    return id
}
function GetItems(){
    const[art, setArt] = new useState([1,2]);
    useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos)
            },3000)
        })  
        task.then((productos)=>{setArt(productos.articulos)})
   },[])  
   if(GetKey()==null){
    return art;
   }else{
    var aCategorias = []
    art.map(res=>{if(res.cat==GetKey())aCategorias.push(res)})
   }
   return aCategorias;
   
   }


function Itemlist(props){
    console.log(GetKey())
    return(
       GetItems().map(it=>{ return (<Item item={it} />)})
    )     
}


export default Itemlist




 