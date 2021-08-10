import {CContext} from './Context/CartContext'
import { useContext } from 'react'
import {Table,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Cart(){
const {carrito,addItem,clearItems}  = useContext(CContext)
console.log(carrito)
let precioTotal=0;
return(
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>ID.Articulo</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio Individual</th>
                <th>Precio Total</th>
            </tr>
        </thead>
        {carrito.map(art=>{
            precioTotal=precioTotal+100*art.cant
            return(
                <tbody>
                <tr>
                    <td>{art.item.id}</td>
                    <td>{art.item.nombre}</td>
                    <td>{art.cant}</td>
                    <td>{100}</td>
                    <td>{100*art.cant}</td>
                </tr>
                </tbody>
        )})}

                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Precio Total</td>
                    <td>{precioTotal}</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td><Button variant="primary"  onClick={clearItems}>Limpiar Carrito</Button></td>
                    {carrito.length===0?<td><Link to={"/"}><Button variant="primary" >Volver a Comprar</Button></Link></td>:<td><Button variant="primary" >Realizar Compra</Button></td>}
                </tr>
                </tbody>
        </Table>                            

)
}

export default Cart