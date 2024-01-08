import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../icons/logo.svg';
import Menu from '../icons/menu.svg';
import CloseMenu from '../icons/close-menu.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './header.css';

function Header() {
  const [menu, setMenu] = useState(true);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className='navbar-wrapper'>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
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
            <Nav className="navbar-items">
              <Nav.Link as={Link} to='/' onClick={handleLinkClick}>INÍCIO</Nav.Link>
              <Nav.Link as={Link} to='/produtos' onClick={handleLinkClick}>NOSSOS PRODUTOS</Nav.Link>
              <Nav.Link as={Link} to='/sobre' onClick={handleLinkClick}>SOBRE NÓS</Nav.Link>
              <Nav.Link as={Link} to='/contato' onClick={handleLinkClick}>CONTATO</Nav.Link>
              <Nav.Link as={Link} to='/politica' onClick={handleLinkClick}>POLÍTICAS DE PRIVACIDADE</Nav.Link>
              <Nav.Link target='blank' href='https://github.com/GustavoMacrini/Dall_React' className='repositorio'>REPOSITÓRIO</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}

export default Header;