import {ListGroup,Card,Button} from 'react-bootstrap';
import Item from './Item';
import Itemlist from './ItemsList';

function ItemListContainer(props) {
    console.log("entre")
    return(
<>
  <h1 className="text-center">Productos</h1>      
<ListGroup horizontal >
  <Itemlist />
</ListGroup>
 
 </> 

    )

}

export default ItemListContainer