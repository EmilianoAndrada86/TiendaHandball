

const imgStyle = {
    height: "10%",
    width: "10%"
  };


function CartWidget() {
    return(
        
         <img src={process.env.PUBLIC_URL + "/img/cart.jpg"} alt ="" style={imgStyle} />
    )


}

export default CartWidget