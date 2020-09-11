import React, { useEffect } from 'react';
import { Nav, Navbar,NavDropdown, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import balance from '../../assets/icon/balance.png';
import flag_mm from '../../assets/icon/flag-mm.jpg';
import flag_uk from '../../assets/icon/flag-uk.jpg';
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

const Styles = styled.div`
    .nav{
        background-color: #202B33; 
    }
    .main-nav-active{
        color: white;
    }
    .navlink{
        padding-left: 60px;
    }
`;

function Navigation (){ 

    const { t, i18n } = useTranslation();
    const [actlink,setactlink] = React.useState('');

    useEffect(() => {
        setactlink(window.location.pathname)
    });

    return(
        <Styles>
                <Navbar collapseOnSelect expand="lg" variant="dark" className="nav" fixed="top">
                    <Navbar.Brand href="/"><img src={balance} alt="logo"/> PhoePhyu & Associates</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto navlink" activeKey={actlink}>

                                <Nav.Link href="/" >
                                    {t('Header.Home')}
                                </Nav.Link>

                                <Nav.Link href="/about_us" >
                                   {t('Header.About Us')}
                                </Nav.Link>

                                <Nav.Link href="/law_firm">
                                   {t('Law Firm')}
                                </Nav.Link>

                                <Nav.Link href="/law_school" >
                                    {t('Header.Law School')}
                                </Nav.Link>

                                <Nav.Link href="/news" >
                                   {t('Header.News')}
                                </Nav.Link>

                                <Nav.Link href="/contact_us">
                                    {t('Header.Contact Us')}
                                </Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Link onClick={()=>i18n.changeLanguage('mm')}>
                               <img src={flag_mm} alt="flag_mm"/> 
                                {t('Header.Myanmar')}
                            </Nav.Link>
                            <Nav.Link eventKey={2}  onClick={()=>i18n.changeLanguage('en')}>
                            <img src={flag_uk} alt="flag_uk"/> 
                                {t('Header.English')}
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
        </Styles>
    )
}

export default Navigation;