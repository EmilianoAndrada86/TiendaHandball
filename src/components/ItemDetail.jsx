import { useState } from 'react'
import {ListGroup,Card,CardGroup, Button} from 'react-bootstrap'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {CContext} from './Context/CartContext'

function ItemDetail({item}){ 
    const {carrito,addItem,clearItems,contador}  = useContext(CContext)
    const [compra, setCompra] = useState()
    
    function onAdd(cantidadAgregada){
        alert("Has agregado "+cantidadAgregada+" del producto")
        addItem(item, cantidadAgregada)
        console.log(contador)
        

    }
        
    
    return(
    
        <CardGroup>
                        <ListGroup.Item key={1} variant="primary" className="cointainer">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + item.url}  />
                        <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>{item.desc}</Card.Text>
                        <Card.Text>{"$"+item.precio}</Card.Text>
                        {compra===item.stock?<Button variant="primary" as={Link} to="/cart" >Finalizar Compra</Button>:<ItemCount initial={1} stock={item.stock} onAdd={onAdd} setCompra={setCompra} />}
                        </Card.Body>
                        </Card>
                        </ListGroup.Item>

        </CardGroup>   


    )
    
    
    
    }
    
    export default ItemDetail