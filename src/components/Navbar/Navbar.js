import React, { useEffect } from 'react';
import { Nav, Navbar,NavDropdown, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import balance from '../../assets/icon/balance.png';
import flag_mm from '../../assets/icon/flag-mm.jpg';
import flag_uk from '../../assets/icon/flag-uk.jpg';
import logo from '../../assets/icon/logo.jpg';
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

const Styles = styled.div`
    .nav{
        background-color: #824D9F; 
    }
    .main-nav-active{
        color: white;
    }
    .navlink{
        padding: 0 15px !important;
    }
    .nav_{
        
    }
    .title{
        
    }
    .logo{
        width: 50px;
        height: 50px;
        margin-left:55px;
        border:2px solid white;
    }
    
    @media(max-width: 480px){
       .title{
        //    display: none;
        font-size:10px;
       }
       .navlink{
        text-align: center;
        margin-top: 18px;
       }
       #responsive-navbar-nav{
           border-top: 1px solid #ddd;
           width: 100%;
       }
       .logo{
        margin-left:0px;
        }
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
                    <Navbar.Brand href="/"  className="navbar-brand"><img src={logo} alt="logo" className="logo"/>&nbsp;&nbsp;<span className="title"> PhoePhyu & Associates Legal Business </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto navlink" activeKey={actlink}>

                                <Nav.Link href="/" className="navlink">
                                    {t('Header.Home')}
                                </Nav.Link>

                                <Nav.Link href="/about_us" className="navlink" >
                                   {t('Header.About Us')}
                                </Nav.Link>

                                <Nav.Link href="/law_firm" className="navlink">
                                   {t('Law Firm')}
                                </Nav.Link>

                                <Nav.Link href="/law_school"className="navlink" >
                                    {t('Header.Law School')}
                                </Nav.Link>

                                <Nav.Link href="/news" className="navlink">
                                   {t('Header.News')}
                                </Nav.Link>

                                <Nav.Link href="/contact_us" className="navlink">
                                    {t('Header.Contact Us')}
                                </Nav.Link>

                                <Nav.Link onClick={()=>i18n.changeLanguage('mm')} className="navlink">
                               <img src={flag_mm} alt="flag_mm"/>
                               &nbsp;&nbsp; 
                                 {t('Header.Myanmar')}
                              </Nav.Link>
                             <Nav.Link eventKey={2}  onClick={()=>i18n.changeLanguage('en')} className="navlink">
                            <img src={flag_uk} alt="flag_uk"/> 
                              &nbsp;&nbsp;
                              {  t('Header.English')}
                            </Nav.Link>
                            </Nav>

                            {/* <Nav className="mx-auto navlink" >
                            <Nav.Link onClick={()=>i18n.changeLanguage('mm')}>
                               <img src={flag_mm} alt="flag_mm"/>
                               &nbsp;&nbsp; 
                                {t('Header.Myanmar')}
                            </Nav.Link>
                            <Nav.Link eventKey={2}  onClick={()=>i18n.changeLanguage('en')}>
                            <img src={flag_uk} alt="flag_uk"/> 
                              &nbsp;&nbsp;
                              {  t('Header.English')}
                            </Nav.Link>
                            </Nav> */}

                        </Navbar.Collapse>
                    </Navbar>
        </Styles>
    )
}

export default Navigation;