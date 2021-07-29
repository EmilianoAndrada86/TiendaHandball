import {Container,Row} from 'react-bootstrap';
import Itemlist from './ItemsList';

function ItemListContainer(props) {
    console.log("entre")
    return(
<>
  <h1 className="text-center">Productos</h1>      
<Container fluid >
  <Row>
  <Itemlist />
  </Row>
</Container>
 
 </> 

    )

}

export default ItemListContainer