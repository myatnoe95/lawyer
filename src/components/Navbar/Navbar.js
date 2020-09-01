import React from 'react';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import {mm_flag} from '../../assets/icon/myanmar.png';
import {uk_flag} from '../../assets/icon/uk.png';


// const Styles = styled.div`
//   .navbar{
//       background-color: red;
//   }

//   .navbar-brand, .navbar-nav .nav-link{
//       color: white;
//   }

//   &:hover{
//       color: white;
//   }
// `;

export const Navigation = () => (

       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">PhoePhyu & Associates</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about_us">About Us</Nav.Link>
                        <Nav.Link href="/law_firm">Law Firm</Nav.Link>
                        <Nav.Link href="/law_school">Law School</Nav.Link>
                        <Nav.Link href="/news">News</Nav.Link>
                        <Nav.Link href="/contact_us">Contact Us</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    <Nav.Link href="/mm">
                        MM
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="/eng">
                        EN
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
</Navbar>

)