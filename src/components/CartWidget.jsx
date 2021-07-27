import {Image} from 'react-bootstrap';

const imgStyle = {
    height: "10%",
    width: "10%"
  };


function CartWidget() {
    return(
        
         <img src={process.env.PUBLIC_URL + "/img/cart.jpg"} style={imgStyle} />
    )


}

export default CartWidget