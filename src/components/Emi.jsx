import React from 'react';
import {Button} from 'react-bootstrap';

export default function Emi(props) {
    let a = new Date();
    return(
        <>
        <Button variant="primary" onClick={function(){
            props.setState(props.state+1);
            props.setHora(Date());}}
            >Contar Clicks</Button>
        <h1>{props.state}</h1>
        <h2>{props.hora}</h2>
        </>
    )


}
