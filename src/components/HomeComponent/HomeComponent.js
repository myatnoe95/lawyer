import React from 'react';
import {Card, Col, Row, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bannerimg1 from '../../assets/image/uphoephyu.jpg';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`
   .container{
       padding: 70px 0;
   }

   .home-info{
       border-left: 5px solid #dee2e6
   }

   .img{   
        width: 100%;
        height: auto;
    }

   .home-title{
        font-size: 30px;
        font-weight: bold;
        margin-top: 40px;
        // text-align: center;
   }

   .home-subtitle{
        padding-left: 20px;
        // font-size: 35px;
        font-weight: bold;
        // text-align: center;
   }

   span{
    font-size: 20px;
   }

   h3{
       font-weight: bold;
       font-size: 27px;
   }


   ul{
    color:#5C7080;
    font-size: 25px; 
    margin-top: 40px;
    text-align: start;
    list-style-type: square;
   }

   li{

   }
   
   @media(max-width: 480px){

    .container{
        padding: 0px;
    }
    .home-info{
        border: none;
    }
    .home-subtitle{
        padding-left: 0px;
        font-size: 27px;
        font-weight: bold;
        margin-top: 20px;
   }
   .home-title{
    font-size: 21px;
     }
   }
  

`;

export function HomeComponent(props){

    const { t } = useTranslation();

    return(
        <Styles>
             <Container className="container">
                <Row>
                    <Col sm>
                       <div className="greeting-para">
                           <h3>Who we are?</h3>
                           <div className="home-title">{t('HomeComponent.Title')}</div>
                       </div>
                    </Col>

                        <Col sm>
                          <div className="home-info">
                                <h3 className="home-subtitle"> {t('HomeComponent.Subtitle')}</h3> 
                            <ul>
                                <li>{t('HomeComponent.List1')}</li>
                                <li>{t('HomeComponent.List2')}</li>
                                <li>{t('HomeComponent.List3')}</li>
                            </ul>
                        </div>
                        </Col>
                    </Row>  
                {/* <Row>
                    <Col sm>
                        <div className="home-info">
                        <div className="home-title">{t('HomeComponent.Title')}</div>
                        <div className="home-subtitle">{t('HomeComponent.Subtitle')}</div> 
                            <ul>
                                <li>{t('HomeComponent.List1')}</li>
                                <li>{t('HomeComponent.List2')}</li>
                                <li>{t('HomeComponent.List3')}</li>
                            </ul>
                        </div>
                    </Col>

                        <Col sm>
                           <img src={bannerimg1} className="img" fluid ></img>
                        </Col>
                    </Row> */}
                </Container>
        </Styles>
    )
}