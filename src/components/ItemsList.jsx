import ItemCount from './ItemCount';
import {ListGroup,Card,CardGroup} from "react-bootstrap"
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import productos from'../articulos.json'
import Item from './Item';
import { useEffect } from 'react';

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
   return art;
   }
function Itemlist(props){
    return(
       GetItems().map(it=>{return (<Item item={it} />)})
    )     
}


export default Itemlist

/*<CardGroup>
        {props.children.map((producto)=><ListGroup.Item key={producto.props.id} variant="primary" className="cointainer">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + producto.props.imagen}  />
                        <Card.Body>
                        <Card.Title>{producto.props.nombre}</Card.Title>
                        <ItemCount initial={initial} stock={producto.props.stock} onAdd={onAdd} />
                        </Card.Body>
                        </Card>
                        <ItemDetailContainer id={producto.props.id}/>
                        </ListGroup.Item>)}

        </CardGroup>   */

 /*function onAdd(cantidadAgregada,producto){
       // alert("Has agregado "+cantidadAgregada+" del producto")
        //}*/


 