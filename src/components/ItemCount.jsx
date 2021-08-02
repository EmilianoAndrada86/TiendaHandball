import { Button,ListGroup } from "react-bootstrap"
import { useState } from 'react';


function ItemCount ({initial,stock,onAdd,setCompra}){
    const [cantidad,setCantidad]=useState(initial)
    return(

        <div className="d-grip gap-2">
            <ListGroup horizontal>
            <ListGroup.Item variant="primary"><Button variant="primary"  onClick={()=>{cantidad>1 ?setCantidad(cantidad-1):console.log('Error');}}>-</Button></ListGroup.Item>
            <ListGroup.Item variant="primary">{cantidad}</ListGroup.Item>
            <ListGroup.Item variant="primary"><Button variant="primary"  onClick={()=>{setCantidad(cantidad+1)}}>+</Button></ListGroup.Item>
            </ListGroup>
            <div className="row justify-content-center">
            <Button className="text-center" variant="primary" size="lg" onClick={()=>{cantidad>stock ? alert("No hay suficiente stock"): onAdd(cantidad);setCompra(cantidad)}}>Agregar Al Carrito</Button>
            </div>
            
        </div>
         
    )
}

export default ItemCount