import arquero from   "../img/arquero.jpeg"
import camiseta from   "../img/camiseta.jpg"
import medias from   "../img/medias.jpg"
import zapas from   "../img/zapas.jpeg"
import ItemCount from './ItemCount';
import {ListGroup,Card} from "react-bootstrap"
function Itemlist(props){
    function onAdd(cantidadAgregada,producto){
        alert("Has agregado "+cantidadAgregada+" del producto")
        }
    let initial = 1;
    console.log(props)
    return(
    props.children.map((producto)=><ListGroup.Item key={producto.props.id} variant="primary" className="cointainer">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={producto.props.imagen} />
                        <Card.Body>
                        <Card.Title>{producto.props.nombre}</Card.Title>
                        <ItemCount initial={initial} stock={producto.props.stock} onAdd={onAdd} />
                        </Card.Body>
                        </Card>
                        </ListGroup.Item>)

            )


    }


export default Itemlist


 