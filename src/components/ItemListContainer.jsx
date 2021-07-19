import {ListGroup,Card,Button} from 'react-bootstrap';
import ItemCount from './ItemCount';
import arquero from   "../img/arquero.jpeg"
import camiseta from   "../img/camiseta.jpg"
import medias from   "../img/medias.jpg"
import zapas from   "../img/zapas.jpeg"



function ItemListContainer(props) {


function onAdd(cantidadAgregada,producto){
alert("Has agregado "+cantidadAgregada+" del producto")
}
let stock1=5;
let stock2=3;
let stock3=6;
let stock4=1;
let initial = 1;


    return(
<>
  <h1 className="text-center">Productos</h1>      
<ListGroup horizontal>
  <ListGroup.Item variant="primary" className="cointainer">
  <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={zapas} />
      <Card.Body>
      <Card.Title>{props.productos[1]}</Card.Title>
      <ItemCount initial={initial} stock={stock1} onAdd={onAdd} />
      </Card.Body>
    </Card>
  </ListGroup.Item>
  <ListGroup.Item variant="primary"> 
  <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={camiseta}/>
      <Card.Body>
      <Card.Title>{props.productos[2]}</Card.Title>
      <ItemCount initial={initial} stock={stock2} onAdd={onAdd} />
      </Card.Body>
    </Card>
  </ListGroup.Item>
  <ListGroup.Item variant="primary">
  <Card style={{ width: '100' }}>
      <Card.Img variant="top" src={arquero}/>
      <Card.Body>
      <Card.Title>{props.productos[3]}</Card.Title>
      <ItemCount initial={initial} stock={stock3} onAdd={onAdd} />
      </Card.Body>
    </Card>
  </ListGroup.Item>
  <ListGroup.Item variant="primary">
  <Card style={{ width: '100' }}>
      <Card.Img variant="top" src={medias} />
      <Card.Body>
      <Card.Title>{props.productos[4]}</Card.Title>
      <ItemCount initial={initial} stock={stock4} onAdd={onAdd} />
      </Card.Body>
    </Card>
  </ListGroup.Item>
</ListGroup>
 
 </>        
    )


}

export default ItemListContainer