import React,{useEffect }from 'react';
import { Jumbotron,Row, Col, Image, Container, Button} from 'react-bootstrap';
import person1 from '../../assets/image/James.jpg';
import person2 from '../../assets/image/Melanie.jpg';
import lawimg from '../../assets/image/Law3.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { translate } from 'react-i18next';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`

.member-card{
    padding: 70px 0;
}

.jumbo{
    background: url(${lawimg});
    background-size: cover;
    color: #efefef;
    width: 100%;
    height: 900px;
    // position: relative;
    // z-index: -2;
}



  
  h1{
    text-align: center;
    color:  #F5F8FA;
    font-weight: bold;
  }
  .info{
    margin-top: 20px;
    text-align: center;
    font-size: 22px;
    color:  #F5F8FA;
    // font-weight: bold;
  }

  .profile-div{
      width: 500px;
    //   border: 1px solid yellow;
  }
   
  .profile-pic{
      width: 100px;
      height: 350px;
  }

  .person-info{
      background-color: #101010;
      text-align: center;
      padding: 20px;
  }

  .image{
      text-align: center;
  }

  .owlcarousel{
     margin-top: 50px;
  }
  
  @media(max-width:480px){
    .profile-div{
        width: 300px;
     
    }
    .jumbo{
        height: auto;
    }
    .person-info{
       height: 150px;
    }
  }

`;

// useEffect(() => {
    
// });


export default function Members (props){
    const { t } = useTranslation();

    const options = {
        margin: 10,
        responsiveClass: true,
        // nav: true,
        dotsEach:true,
        // dots: false,
        items:3,
        loop: true,
        autoplay: true,
        // navText: ["Prev "," Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
    
            }
        },
    };
    



        return(
            <Styles> 
                <div className="member-card">
                <Container fluid >
                   <Jumbotron className="jumbo">
                       <Container fluid>
                            <h1>{t('Members.Member.Member-Title')}</h1>
                            <p className="info">
                               {t('Members.Member.Member-info')}
                            </p>
                        </Container>

                        <OwlCarousel
                           {...options}
                        >
                            <div class="item">
                              <div className="profile-div">
                                 <Image src={person1 }></Image>
                                 <div className="person-info">
                                    <h4>{t('Members.Member1.Member-Name')}</h4>
                                    <p>{t('Members.Member1.Member-Position')}</p>
                                 </div>
                              </div>
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                    <Image src={person2 }></Image>
                                    <div className="person-info">
                                        <h4>{t('Members.Member2.Member-Name')}</h4>
                                        <p>{t('Members.Member2.Member-Position')}</p>
                                    </div>
                                </div> 
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                    <Image src={person2 }></Image>
                                    <div className="person-info">
                                        <h4>{t('Members.Member3.Member-Name')}</h4>
                                        <p>{t('Members.Member3.Member-Position')}</p>
                                    </div>
                                </div> 
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                    <Image src={person1 }></Image>
                                    <div className="person-info">
                                        <h4>{t('Members.Member4.Member-Name')}</h4>
                                        <p>{t('Members.Member4.Member-Position')}</p>
                                    </div>
                                </div> 
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                        <Image src={person1 }></Image>
                                        <div className="person-info">
                                            <h4>{t('Members.Member5.Member-Name')}</h4>
                                            <p>{t('Members.Member5.Member-Position')}</p>
                                       </div>
                                </div>  
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                        <Image src={person1 }></Image>
                                        <div className="person-info">
                                            <h4>{t('Members.Member6.Member-Name')}</h4>
                                            <p>{t('Members.Member6.Member-Position')}</p>
                                        </div>
                                </div>  
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                    <Image src={person1 }></Image>
                                    <div className="person-info">
                                        <h4>{t('Members.Member7.Member-Name')}</h4>
                                        <p>{t('Members.Member7.Member-Position')}</p>
                                    </div>
                                </div> 
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                    <Image src={person2 }></Image>
                                    <div className="person-info">
                                        <h4>{t('Members.Member8.Member-Name')}</h4>
                                        <p>{t('Members.Member8.Member-Position')}</p>
                                    </div>
                                </div> 
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                    <Image src={person1 }></Image>
                                    <div className="person-info">
                                        <h4>{t('Members.Member9.Member-Name')}</h4>
                                        <p>{t('Members.Member9.Member-Position')}</p>
                                    </div>
                                </div> 
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                    <Image src={person1 }></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member10.Member-Name')}</h4>
                                    <p>{t('Members.Member10.Member-Position')}</p>
                                </div>
                                </div> 
                            </div>

                            <div class="item">
                               <div className="profile-div">
                                    <Image src={person2 }></Image>
                                <div className="person-info">
                                    <h4>{t('Members.Member11.Member-Name')}</h4>
                                    <p>{t('Members.Member11.Member-Position')}</p>
                                </div>
                                </div> 
                            </div>

                            <div class="item">
                                <div className="profile-div">
                                        <Image src={person2 }></Image>
                                        <div className="person-info">
                                            <h4>{t('Members.Member12.Member-Name')}</h4>
                                            <p>{t('Members.Member12.Member-Position')}</p>
                                        </div>
                                </div> 
                            </div>
                        </OwlCarousel>

                   </Jumbotron>
                </Container>
                                    
                </div>
                {/* <Container fluid>
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
                    </Jumbotron>
                </Container> */}
            </Styles>
        )
}