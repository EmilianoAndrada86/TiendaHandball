import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'



function Item({item}){


return(
    
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.nomcat}</Card.Subtitle>
            <NavLink to={`/item/${item.id}`}>Ir a Detalle</NavLink>
    </Card.Body>
    </Card>
    
)
}
export default Item