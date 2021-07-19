import { auto } from '@popperjs/core';
import {Image} from 'react-bootstrap';
import Imagen from   "../img/cart.jpg"

const imgStyle = {
    height: "10%",
    width: "10%"
  };


function CartWidget() {
    return(
        
         <img src={Imagen} style={imgStyle} />
    )


}

export default CartWidget