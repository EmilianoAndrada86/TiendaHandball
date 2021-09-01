import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useContext } from 'react';
import {CContext} from './Context/CartContext'

const imgStyle = {
    height: "100%",
    width: "10%"
  };





function CartWidget() {
  
      const {contador}  = useContext(CContext)
      return(
       <>
       <Link to={"/cart"}><img  src={process.env.PUBLIC_URL + "/img/cart.jpg"} alt ="" style={imgStyle} />{contador}</Link>
        </>
      )
           

  
  
  
 


}

export default CartWidget