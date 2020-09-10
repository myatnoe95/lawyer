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

`;

export default class ContactInformation extends React.Component{
    render(){
        return(
        <Styles>
            <Container>
                <Row>
                    <Col>
                        <div className="contact-sec2-column">
                            <span><Icon.Map size={30}/></span><br/><br></br>
                            <h5>Address</h5><br/>
                            <p> No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon</p>
                        </div>
                    </Col >
                </Row>
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
            </Container>
        </Styles>
        )
    }
}