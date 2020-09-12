import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import styled from 'styled-components';

const Styles = styled.div`
.contact-sec2-column{
    text-align: center;
    background-color: #706e66;
    color: white;
    padding-top: 20px;
    padding-bottom:10px;
    margin-bottom: 20px;
    z-index: -1;
}

.address{
    background-color: #706e66;
    color: white;
    height: 450px;
    padding-top: 100px;
    padding-bottom:10px;
}

.address_title{
 
}

ul{
    list-style-type: none;
    text-align: start

}


`;

export default class ContactInformation extends React.Component{
    render(){
        return(
        <Styles>
            <Container>
                    <Row>
                        <Col sm>
                             
                                <ul>
                                    <li>
                                        <h5 className="address_title"> <span><Icon.Map size={30} color="tomato"/></span> &npsb; Address : No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon </h5><br/>
                                        {/* <p className="address_para"> No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon</p> */}
                                    </li>

                                    <li>
                                        <h5><span><Icon.Telephone size={30} color="#F2B824"/></span> &nbsp; Phone : 09 73000 441</h5><br/>
                                    </li>

                                    <li>
                                        <h5> <span><Icon.PhoneVibrate size={30} color="#F29D49"/></span> &nbsp;  Viber/Hotline : 09 960 278 100</h5><br/>
                                    </li>

                                    <li>
                                        <h5><span><Icon.Envelope size={30} color="#96622D"/></span> &nbsp; Email : ipleaderphoephyu@gmail.com</h5><br/>
                                    </li>

                                    <li>
                                        <h5><span><Icon.Globe size={30} color="#4580E6"/></span> &nbsp; Website : www.uphoephyu.com</h5><br/>
                                    </li>
                                </ul>
                                {/* <h5 className="address_title"> <span><Icon.Map size={30}/></span> Address</h5><br/>
                                <p className="address_para"> No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon</p> */}
        
                        
                        </Col>

                        <Col sm>
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.0891310344246!2d96.16938!3d16.7722406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed6d1bc16943%3A0x4a1098b6acd3183d!2sMyanmar%20Environmental%20Legal%20Services%20Limited!5e0!3m2!1sen!2smm!4v1599155767961!5m2!1sen!2smm" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </Col>
                    </Row>
                {/* <Row>
                    <Col>
                        
                    </Col >
                </Row> */}
            </Container>

            {/* <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <div className="contact-sec2-column">
                            <span><Icon.Telephone size={30}/></span><br/><br></br>
                            <h5>Phone</h5><br/>
                            <p>09 73000 441</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="contact-sec2-column">
                            <span><Icon.PhoneVibrate size={30}/></span><br/><br></br>
                            <h5>Viber/Hotline</h5><br/>
                            <p>09 960 278 100</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="contact-sec2-column">
                            <span><Icon.Envelope size={30}/></span><br/><br></br>
                            <h5>Email</h5><br/>
                            <p>ipleaderphoephyu@gmail.com</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="contact-sec2-column">
                            <span><Icon.Globe size={30}/></span><br/><br></br>
                            <h5>Website</h5><br/>
                            <p>www.uphoephyu.com</p>
                        </div>
                    </Col>
                </Row>
            </Container> */}
        </Styles>
        )
    }
}