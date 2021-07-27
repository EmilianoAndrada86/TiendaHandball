import ItemCount from './ItemCount';
import {ListGroup,Card,CardGroup} from "react-bootstrap"
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
function Itemlist(props){
    function onAdd(cantidadAgregada,producto){
        alert("Has agregado "+cantidadAgregada+" del producto")
        }
    let initial = 1;
    
    
    return(
        <CardGroup>
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

        </CardGroup>         
            )


    }


export default Itemlist


 