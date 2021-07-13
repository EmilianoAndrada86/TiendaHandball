import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

export default function NavBar(){
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
      <Nav.Link href="#action1">Inicio</Nav.Link>
      <Nav.Link href="#action2">Galeria</Nav.Link>
      <NavDropdown title="Productos" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Zapatillas</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Remeras</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Arqueros</NavDropdown.Item>
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
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>



    )

}