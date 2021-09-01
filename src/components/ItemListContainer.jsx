import {Container,Row} from 'react-bootstrap';
import Itemlist from './ItemsList';
import "../index.css"
function ItemListContainer(props) {
  
    return(
<>
<Container fluid  >
  <h1 className="text-center" id="Titulo">Nuestros Productos</h1>      

  <Row >
  <Itemlist />
  </Row>
</Container>
 
 </> 

    )

}

export default ItemListContainer