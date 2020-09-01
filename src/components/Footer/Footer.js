import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
   .main-footer{
       background-color:#202B33;
       margin-top: 40px;
       color: white;
       height: 400px;
   }

    .container{
 
    }
    
    .row{
       
    }

    .section{
        margin-top: 30px;
        padding-left: 15px;
    }

    ul {
        list-style-type: "> ";
      }
`;

export const Footer = (props) => (
    <Styles>
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Column 1 */}
                <div className="col-md-3 col-sm-6 section">
                  <h4>Significance of the Law firm</h4>
                    <p>We provide any kinds of legal Services with wide vision and reasoning all around</p>
                </div>

                 {/* Column 2 */}
                 <div className="col-md-3 col-sm-6 section">
                  <h4>Practice Areas</h4>
                  <ul className="list-unstyled">
                      <li> Economy</li>
                      <li> Land-disputes</li>
                      <li> Trade</li>
                  </ul>
                </div>

                 {/* Column 3 */}
                 <div className="col-md-3 col-sm-6 section">
                        <h4>Business Hours</h4>
                        <div className="section1">
                            <p>Opening hour:</p>
                            <p>Monday – Friday : 9am to 20 pm Saturday : 9am to 17 pm</p>
                        </div>

                        <div className="section2">
                            <p>Vacations:</p>
                            <p>All Sunday Days All Official Holidays</p>
                        </div>
                </div>

                 {/* Column 4 */}
                 <div className="col-md-3 col-sm-6 section">
                  <h4>Have a Questions?</h4>
                    <div>No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon</div>
                    <br></br>
                    <div>09 73000 441</div>
                    <br></br>
                    <div>ipleaderphoephyu@gmail.com</div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p className="text-xs-center">
                   &copy;{new Date().getFullYear()} MicroServices Myanmar - All right reserved
                </p>
            </div>
        </div>
    </div>
    </Styles>
)

