import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import styled from 'styled-components';


const Styles = styled.div`
   .main-footer{
       background-color: #101010;
       margin-top: 40px; 
       color: white;
       padding: 100px;
   }

    .section{
        margin-top: 30px; 
        // padding-left: 15px;
    }

    ul {
        list-style-type: "> ";
      }

    li{
       margin-top: 10px;
       font-size: 18px;
    }
    span{
        color:rgba(255, 255, 255, 0.3);
        font-size: 18px;
        font-style: italic;
    }
    h4{
        margin-bottom: 20px;
    }

    p{
        font-size: 18px;
    }

    .com_info{
        font-size: 18px;
    }

    .text{
        margin-top: 5px;
    }

    .footer{
        background-color:#20163C;
    
        padding: 20px 0;
        color: #fff;
    }

    hr{
        width: 60px;
        height: 3px;
        margin-bottom: 20px;
        margin-left: 0;
        background-color:#eac15a;
        border: none;
     }

    @media (min-width: 1200px){
        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1500px !important;
        }
        
       }
`;

export const Footer = (props) => (
    <Styles>
    <div className="main-footer">
        <div className="container">
            <div className="row">
                
                {/* Column 1 */}
                <div className="col-md-3 col-sm-12 col-xs-12 section">
                  <h4>Significance of the Law firm</h4>
                  <hr/>
                    <p>We provide any kinds of legal Services with wide vision and reasoning all around</p>
                </div>

                 {/* Column 2 */}
                 <div className="col-md-3 col-sm-12 col-xs-12 section">
                  <h4>Practice Areas</h4>
                  <hr/>
                  <ul className="list-unstyled">
                      <li> Economy</li>
                      <li> Land-disputes</li>
                      <li> Trade</li>
                  </ul>
                </div>

                 {/* Column 3 */}
                 <div className="col-md-3 col-sm-12 col-xs-12 section">
                        <h4>Business Hours</h4>
                        <hr/>
                        <div className="section1">
                            <span>Opening Days:</span>
                            <br></br>
                            <p>Monday – Friday : 9am to 20 pm Saturday : 9am to 17 pm</p>
                        </div>

                        <div className="section2">
                            <span>Vacations:</span>
                            <br></br>
                            <p>All Sunday Days All Official Holidays</p>
                        </div>
                </div>

                 {/* Column 4 */}
                 <div className="col-md-3 col-sm-12 col-xs-12 section">
                  <h4>Have a Questions?</h4>
                  <hr/>
                    <div className="com_info"> <Icon.Map /> &nbsp;  No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon</div>
                    <br></br>
                    <div className="com_info"> <Icon.Telephone/>  &nbsp; 09 73000 441</div>
                    <br></br>
                    <div className="com_info"> <Icon.Envelope />  &nbsp;  ipleaderphoephyu@gmail.com</div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
                
            </div>
        </div>
    </div>
    <div className="footer">
           <p className="text-center text">
                  &copy;{new Date().getFullYear()} MicroServices Myanmar - All right reserved
            </p>
    </div>
    </Styles>
)

