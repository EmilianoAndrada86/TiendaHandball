import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import {CContext} from './Context/CartContext'

export default function NavBar(){
  const {carrito,addItem,clearItems}  = useContext(CContext)
    return(
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Tienda Handball</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link as={Link} to="/">Inicio</Nav.Link>
      <NavDropdown title="Productos" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to={`/category/${1}`}>Zapatillas</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={`/category/${2}`}>Remeras</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={`/category/${3}`}>Arqueros</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={`/category/${4}`}>Medias</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={`/category/${5}`}>Protectores</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        ¿Que Buscas?
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
  {carrito.length===0?<p>No hay items en el Carrito</p>:<CartWidget items={carrito} />}
</Navbar>



    )

}