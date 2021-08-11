import {Card,Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'



function Item({item}){


return(
    <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{item.datos.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.datos.nomcat}</Card.Subtitle>
            <NavLink to={`/item/${item.id}`}>Ir a Detalle</NavLink>
    </Card.Body>
    </Card>
    </Col>
    
    
)
}
export default Item