import {Alert} from 'react-bootstrap'

function ItemDetail(props){ 
    console.log("props item detail")
    console.log(props)
    return(
    
        <Alert variant="primary">
        {props.detalle}
        </Alert>

    )
    
    
    
    }
    
    export default ItemDetail