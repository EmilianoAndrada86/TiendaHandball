import { useState, useEffect } from "react"
import {Card} from 'react-bootstrap'



function Item({item}){


return(
    
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.id}</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Ver Detalle</Card.Link>
            
  </Card.Body>
    </Card>
    
)
}
export default Item