import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../icons/logo.svg';
import Menu from '../icons/menu.svg';
import CloseMenu from '../icons/close-menu.svg';
import { Link } from 'react-router-dom';
import './header.css'
import React, { useState } from 'react';



function Header() {
  const [menu, setMenu] = useState(true);

  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container className=''>
        <Navbar.Brand href="#home">
          <Link to='/'>
            <img src={Logo}/>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMenu(!menu)}> 
          <img src={menu? Menu : CloseMenu}/>
        </Navbar.Toggle>


        
        <Navbar.Collapse className="justify-content-end">
          <Nav className="navbar-items" id='teste'>
            <Nav.Link as={Link} to='/'>INÍCIO</Nav.Link>
            <Nav.Link as={Link} to='/produtos'>NOSSOS PRODUTOS</Nav.Link>
            <Nav.Link as={Link} to='/sobre'>SOBRE NÓS</Nav.Link>
            <Nav.Link as={Link} to='/contato'>CONTATO</Nav.Link>
            <Nav.Link as={Link} to='/politica'>POLÍTICAS DE PRIVACIDADE</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;