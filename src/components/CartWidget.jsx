import { Link } from "react-router-dom";

const imgStyle = {
    height: "100%",
    width: "10%"
  };



function CartWidget(props) {

    console.log(props)
      return(
       <>
       <Link to={"/cart"}><img  src={process.env.PUBLIC_URL + "/img/cart.jpg"} alt ="" style={imgStyle} />{props.items.length}</Link> 
        
        </>
      )
           

  
  
  
 


}

export default CartWidget