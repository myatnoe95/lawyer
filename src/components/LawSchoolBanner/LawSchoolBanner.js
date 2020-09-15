import React from 'react';
import {Jumbotron as Jumbo, Container , Row, Col, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import LawSchoolimg from '../../assets/image/lawschool1.jpg';


const Styles =styled.div`
   .jumbo{
    background-image: url(${LawSchoolimg});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 60vh;
   }

   .overlay{
       background-color: #000;
       opacity: 0.6;
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       z-index: -1;
   }

   h1{
       margin-top: 180px;
       text-align: center;
       font-style: italic;
       font-weight: bold;
       color: #394B59;
   }

   .label{
       color: #fff;
   }

   .login-form{
      background-color: rgba(255,255,255,.5);
      padding:60px;
      border-radius: 15px;
      box-shadow: 0px 0px 3px #777;
      margin-top: 2%;
   }

   .form{

       margin-left: auto;
       margin-right: auto;
      
   }

   h3{
       text-align: center;
   }

   .lawschool-contact{
      margin-top: 2%;
   }

   .contact-lawschool{
       text-align: center;
       color: #fff;
   }

   ul{
       color: #fff;
       list-style-type: none;
       font-size: 16px;
   }

   @media(max-width:480px){
    .jumbo{
        height: auto;
        background-size: cover;
    }
    .lawschool-contact{
        // margin-top: 20%;
        display: none;
     }
     .login-form{
        margin-top: 15%;
     }
   }

  
`;

export const LawSchoolBanner = (props)=>(
    <Styles>
        <Jumbo  className="jumbo">
            <div className="overlay"></div>
             <Container fluid>
                <Row>
                    <Col className="lawschool-contact" md={4} sm={12} xs={12}>
                       {/* <h3 className="contact-lawschool">Contact Information</h3> */}
                       <ul>
                            <li>
                                <h5 className="address_title"> <span><Icon.Map size={30} color="tomato"/></span>  &nbsp; No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon </h5> <br/>
                            </li>

                            <li>
                                <h5><span><Icon.Telephone size={30} color="#F2B824"/></span> &nbsp; 09-254 051 719</h5><br/>
                            </li>

                            <li>
                                <h5> <span><Icon.PhoneVibrate size={30} color="#F29D49"/></span> &nbsp;  09-960 278 100</h5><br/>
                            </li>

                            <li>
                                <h5><span><Icon.Envelope size={30} color="#96622D"/></span> ipleaderphoephyu@gmail.com</h5><br/>
                            </li>

                            <li>
                                <h5><span><Icon.Globe size={30} color="#4580E6"/></span> &nbsp; www.uphoephyu.org</h5><br/>
                            </li>
                        </ul>
                    </Col>

                    <Col md={4} sm={12} xs={12}>
                    
                    </Col>

                    <Col className="login-form"  md={4} sm={12} xs={12}>
                            <Form  className="form">
                            <h3>Law School Login</h3>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="label">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="label">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    
                    </Col>
                </Row>
             </Container>
        </Jumbo>
     </Styles>
   
)