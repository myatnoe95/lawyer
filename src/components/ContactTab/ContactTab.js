import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';
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

`;


export default class ContactTab extends React.Component{
    render(){
        return(
        <Styles>
            <div>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Law Firm Enquiry">
                        <div className="pic1-form1">
                            <div className="pic1">
                                {/* <div className="text1">
                                    <RiAuctionLine className="text1-icon1" size={100}/>
                                    <h1 className="text1-head1">Law Firm</h1>
                                    <h3>Enquiry</h3>           
                                </div> */}
                            </div>
                            <div className="form1">
                                <h2 className="head1">Enquiry Form</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Law School Enquiry">
                        <div className="pic2-form2">
                            <div className="pic2">
                                {/* <div className="text2">
                                    <FaRegHandshake className="text2-icon2" size={100}/>
                                    <h1 className="text2-head2">Law School</h1>
                                    <h3>Enquiry</h3>
                                </div> */}
                            </div>
                            <div className="form2">
                                <h2 className="head2">Enquiry Form</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="Publications Order">
                        <div className="pic3-form3">
                            <div className="pic3">
                                {/* <div className="text3">
                                    <BiMedal className="text3-icon3" size={100}/>
                                    <h1 className="text3-head3">Publication</h1>
                                    <h3>Order</h3>
                                </div> */}
                            </div>
                            <div className="form3">
                                <h2 className="head3">Enquiry Form</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </Styles>
        )
    }
}