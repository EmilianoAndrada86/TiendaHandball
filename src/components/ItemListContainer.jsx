import {ListGroup} from 'react-bootstrap';


function ItemListContainer({producto1,producto2,producto3,producto4,producto5}) {
    
    return(
        
<ListGroup>
  <ListGroup.Item>Productos</ListGroup.Item>
  <ListGroup.Item variant="primary">{producto1}</ListGroup.Item>
  <ListGroup.Item variant="primary">{producto2}</ListGroup.Item>
  <ListGroup.Item variant="primary">{producto3}</ListGroup.Item>
  <ListGroup.Item variant="primary">{producto4}</ListGroup.Item>
  <ListGroup.Item variant="primary">{producto5}</ListGroup.Item>
</ListGroup>
         
    )


}

export default ItemListContainer