import React,{useEffect }from 'react';
import { Jumbotron,Row, Col, Image, Container, Button} from 'react-bootstrap';
import bannerimg from '../../assets/image/img3.jpg';
import personimg from '../../assets/image/lawyer.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`
  .jumbotron{
    // background-color:#202B33;
    // color: #efefef;
  }
  
  h1{
    text-align: center;
  }
  .info{
    text-align: center;
    font-size: 20px;
    color:#5C7080;  
  }
   
  .profile-pic{
      width: 100px;
      height: 350px;
  }

  .person-info{
      text-align: center;
  }

  .image{
      text-align: center;
  }

  .owlcarousel{
     
  }
 
`;

// useEffect(() => {
    
// });


export default function Members (props){

    const { t } = useTranslation();

        return(
            <Styles> 
                <Container fluid>
                    <Jumbotron className="jumbotron">
                        <Container fluid>
                            <h1>{t('Members.Member.Member-Title')}</h1>
                            <p className="info">
                               {t('Members.Member.Member-info')}
                            </p>
                        </Container>

                         <OwlCarousel
                            className="owl-theme owlcarousel"
                            loop
                            items="3"
                            margin={10}
                            nav
                        >
                            <div class="item">
                              <Image src={personimg} roundedCircle className="profile-pic"></Image>
                              <div className="person-info">
                                    <h4>{t('Members.Member1.Member-Name')}</h4>
                                    <p>{t('Members.Member1.Member-Position')}</p>
                              </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member2.Member-Name')}</h4>
                                    <p>{t('Members.Member2.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                        <h4>{t('Members.Member3.Member-Name')}</h4>
                                        <p>{t('Members.Member3.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member4.Member-Name')}</h4>
                                    <p>{t('Members.Member4.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member5.Member-Name')}</h4>
                                    <p>{t('Members.Member5.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member6.Member-Name')}</h4>
                                    <p>{t('Members.Member6.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member7.Member-Name')}</h4>
                                    <p>{t('Members.Member7.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member8.Member-Name')}</h4>
                                    <p>{t('Members.Member8.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member9.Member-Name')}</h4>
                                    <p>{t('Members.Member9.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member10.Member-Name')}</h4>
                                    <p>{t('Members.Member10.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member11.Member-Name')}</h4>
                                    <p>{t('Members.Member11.Member-Position')}</p>
                                </div>
                            </div>

                            <div class="item">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member12.Member-Name')}</h4>
                                    <p>{t('Members.Member12.Member-Position')}</p>
                                </div>
                            </div>
                        </OwlCarousel>
                 {/* <Row>
                    <Col sm>
                        <div className="image"> 
                           <Image src={bannerimg} roundedCircle className="profile-pic"></Image>
                        </div>

                        <div className="person-info">
                            <h4 className="person">U Phoe Phyu</h4>
                            <p className="position">Higher Grade Pleader (CEO)</p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="image">
                            <Image src={personimg} roundedCircle className="profile-pic"></Image>
                        </div>

                        <div className="person-info">
                            <h4 className="person">Daw Nwe Nwe San</h4>
                            <p className="position">Legal Researcher (Advocate)</p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="image">
                           <Image src={personimg} roundedCircle className="profile-pic"></Image>
                        </div>
                        
                        <div className="person-info">
                            <h4 className="person">Daw Ei Mon Thaw</h4>
                            <p className="position">Legal Researcher (Advocate)</p>
                        </div>
                    </Col>
                </Row> */}
                    </Jumbotron>
               

                </Container>
            </Styles>
        )
}