import React from 'react';
import {Tabs,Tab, Row, Col} from 'react-bootstrap';
import { RiAuctionLine } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa';
import { BiMedal } from 'react-icons/bi';
import ContactForm from '../ContactForm/ContactForm';
import styled from 'styled-components';
import pic1 from '../../assets/image/bg_1.jpg';
import pic2 from '../../assets/image/LS2.jpg';
import pic3 from '../../assets/image/order.jpg';


const Styles = styled.div`
.pic1-form1,.pic2-form2,.pic3-form3{
    display: flex;
    padding-top:20px;
    padding-bottom: 30px;
}
.pic1{
    background-image: url(${pic1});
}
.pic2{
    background-image: url(${pic2});
}
.pic3{
    background-image: url(${pic3});
}
.pic1,.pic2,.pic3{
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width:600px;
    height:650px;
    /* text-align: center;
    position: relative; */
}
/* .contact-sec3-pic1::before,.contact-sec3-pic2::before,.contact-sec3-pic3::before{
    position: absolute;
    content: '';
    width:554px;
    height:650px;
    left: 0;
    top: 0;
    background-color: #333333;
    opacity: 0.4;
} */
.text1,.text2,.text3{
    position: relative;
    text-align: center;
    font-weight: bolder;
}

.text1-icon1,.text2-icon2,.text3-icon3{
    margin-top: 230px;
}
.text1-head1,.text2-head2,.text3-head3{
    padding: 0px;
}

.head1,.head2,.head3{
    text-align: center;
    padding-top:40px;
    padding-bottom:40px;
}
.form1,.form2,.form3{
    width:600px;
    padding-left:50px;
}

@media(max-width: 480px){
    .pic1,.pic2,.pic3{
        display: none;
    }

    .form1,.form2,.form3{
        width:100%;
        padding-left:0px;
    }
}

`;


export default class ContactTab extends React.Component{
    render(){
        return(
        <Styles>
            <div>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Law Firm Enquiry">
                        <Row>
                            <Col md={6} xs={12}>
                              <div className="pic1-form1">
                                <div className="pic1">

                                </div>
                              </div>
                            </Col>

                            <Col md={6} xs={12}>
                                <div className="form1">
                                    <h2 className="head1">Enquiry Form</h2>
                                    <ContactForm/>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey={2} title="Law School Enquiry">
                        <Row>
                            <Col md={6} xs={12}>
                            <div className="pic2-form2">
                                <div className="pic2">

                                </div>
                              </div>
                            </Col>

                            <Col md={6} xs={12}>
                                <div className="form2">
                                    <h2 className="head2">Enquiry Form</h2>
                                    <ContactForm/>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey={3} title="Publications Order">
                         <Row>
                            <Col md={6} xs={12}>
                            <div className="pic3-form3">
                                <div className="pic3">

                                </div>
                              </div>
                            </Col>

                            <Col md={6} xs={12}>
                                <div className="form3">
                                    <h2 className="head3">Enquiry Form</h2>
                                    <ContactForm/>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </Styles>
        )
    }
}