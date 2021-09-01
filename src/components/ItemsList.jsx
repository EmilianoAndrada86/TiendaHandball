import { useState } from 'react';
import Item from './Item';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {getFirestore} from '../services/fireBaeService'
import { Container, Row } from 'react-bootstrap';

function GetKey(){
    let {id} = useParams()
    return id
}
function GetItems(){
    const[art, setArt] = new useState([]);
    useEffect(()=>{    
    const db=getFirestore()
    const Itemcollection = db.collection("producto")
    Itemcollection.get().then((query)=>{
        if(query.size===0){
            console.log("No result");
        }
        else{
        setArt(query.docs.map(doc=>{return {"id":doc.id,"datos":doc.data()}}))
        }
    }).catch(error=>{console.log("Error= ",error);})
   },[])  
   if(GetKey()==null){
    return art
   }else{
    var aCategorias = []
    art.map(res=>{if(res.datos.cat==GetKey())aCategorias.push(res)})
   }
   return aCategorias;
   
   }


function Itemlist(props){
    return(
    <Container fluid id="itemCoint">
       
        {GetItems().map(it=>{ return (<Item item={it} />)})}
       
    </Container>
       
    )     
}


export default Itemlist




 