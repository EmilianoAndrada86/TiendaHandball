import {ListGroup,Card,CardGroup} from 'react-bootstrap'
import ItemCount from './ItemCount'

function ItemDetail({item}){ 
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
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                        </Card.Body>
                        </Card>
                        </ListGroup.Item>

        </CardGroup>   


    )
    
    
    
    }
    
    export default ItemDetail