import {ListGroup,Card,Button} from 'react-bootstrap';
import Item from './Item';
import Itemlist from './ItemsList';

function ItemListContainer(productos) {
  
   const items= productos.productos.articulos.map((producto)=>{
    return( <Item id={producto.id} nombre={producto.nombre} stock={producto.stock} imagen={producto.url} />
    )
    })


    return(
<>
  <h1 className="text-center">Productos</h1>      
<ListGroup horizontal>
  <Itemlist>
    {items}
  </Itemlist>
</ListGroup>
 
 </> 

    )


}

export default ItemListContainer