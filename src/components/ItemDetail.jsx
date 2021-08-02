import { useState } from 'react'
import {ListGroup,Card,CardGroup, Button} from 'react-bootstrap'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

function ItemDetail({item}){ 
    
    const [compra, setCompra] = useState()
    function onAdd(cantidadAgregada,producto){
        alert("Has agregado "+cantidadAgregada+" del producto")
    }
        
    
    return(
    
        <CardGroup>
                        <ListGroup.Item key={1} variant="primary" className="cointainer">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + item.url}  />
                        <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>{item.desc}</Card.Text>
                        {compra===5?<Button variant="primary" as={Link} to="/cart" >Finalizar Compra</Button>:<ItemCount initial={1} stock={item.stock} onAdd={onAdd} setCompra={setCompra} />}
                        </Card.Body>
                        </Card>
                        </ListGroup.Item>

        </CardGroup>   


    )
    
    
    
    }
    
    export default ItemDetail