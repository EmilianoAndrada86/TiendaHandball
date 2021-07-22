import {ListGroup,Card,Button} from 'react-bootstrap';
import Item from './Item';
import Itemlist from './ItemsList';
import zapas from   "../img/zapas.jpeg"
import arquero from   "../img/arquero.jpeg"
import camiseta from   "../img/camiseta.jpg"
import medias from   "../img/medias.jpg"

function ItemListContainer(props) {

let stock1=5;
let stock2=3;
let stock3=6;
let stock4=1;
    return(
<>
  <h1 className="text-center">Productos</h1>      
<ListGroup horizontal>
  <Itemlist>
    <Item id={1} nombre={props.productos[0]} stock={stock1} imagen={zapas}/>
    <Item id={2} nombre={props.productos[1]} stock={stock2} imagen={camiseta}/>
    <Item id={3} nombre={props.productos[2]} stock={stock3} imagen={arquero}/>
    <Item id={4} nombre={props.productos[3]} stock={stock4} imagen={medias}/>
  </Itemlist>
</ListGroup>
 
 </>        
    )


}

export default ItemListContainer