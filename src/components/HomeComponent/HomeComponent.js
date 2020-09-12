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
   .home-info{
    
   }

   .img{   
        width: 100%;
        height: auto;
    }

   .home-title{
        font-size: 40px;
        font-weight: bold;
        // text-align: center;
   }

   .home-subtitle{
        font-size: 35px;
        font-weight: bold;
        // text-align: center;
   }


   ul{
    color:#5C7080;
    font-size: 25px; 
    margin-top: 40px;
    text-align: start;
    list-style-type: " > ";
   }

   li{

   }

  

`;

export function HomeComponent(props){

    const { t } = useTranslation();

    return(
        <Styles>
             <Container className="container">
                <Row>
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
                    </Row>
                </Container>
             {/* <div className="home-info">
                    <div className="home-title">{t('HomeComponent.Title')}</div>
                      <div className="home-subtitle">{t('HomeComponent.Subtitle')}</div> 
                        <ul>
                            <li>{t('HomeComponent.List1')}</li>
                            <li>{t('HomeComponent.List2')}</li>
                            <li>{t('HomeComponent.List3')}</li>
                        </ul>
              </div> */}
        </Styles>
    )
}