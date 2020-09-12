import React,{Component} from 'react';
import {Card, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()


const Styles = styled.div`

   .container{
       padding: 20px 0;
       margin-top: 0px !important;
   }
   .services{
       width: 100%;
    //    margin: 50px auto;

   }

   .service-card{
       border-radius: 15px;
   } 

   .services-title{

   }

   .services-para{
        font-size: 20px;
        margin-top: 20px;
        color:#5C7080;
   }

   .service-card-title{
      font-size: 28px;
   }

   ol{
       list-style-type: "- ";
       color:#5C7080;
       font-size: 20px;
   }

   ul{
      color:#5C7080;
      font-size: 20px;
      margin-top: 30px;
   }

   .service-info{
       margin: 30px auto;
   }

   .service-title{
       font-size: 30px;
       color:#30404D;
   }

  

`;

export default function LegalService (props){

    const { t } = useTranslation();

         return(
             <Styles>
            <Container fluid="md" className="container">
               <div className="services">
                  <h1 className="services-title">{t('LegalService.Service.Service-Title')}</h1>
                  <p className="services-para">{t('LegalService.Service.Service-info')}</p>
               </div>
            
            
               <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title className="service-card-title">{t('LegalService.Service1.Service-no')}{t('LegalService.Service1.Service1-Title')}</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>{t('LegalService.Service1.Service1-List1')}</li>
                            <li>{t('LegalService.Service1.Service1-List2')}</li>
                            <li>{t('LegalService.Service1.Service1-List3')}</li>
                            <li>{t('LegalService.Service1.Service1-List4')}</li>
                            <li>{t('LegalService.Service1.Service1-List5')}</li>
                        </ol>
                    </Card.Text>
                    </Card.Body>
               </Card>
              <br />
              <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title className="service-card-title">{t('LegalService.Service2.Service-no')}{t('LegalService.Service2.Service2-Title')}</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>{t('LegalService.Service2.Service2-List1')}</li>
                            <li>{t('LegalService.Service2.Service2-List2')}</li>
                            <li>{t('LegalService.Service2.Service2-List3')}</li>
                            <li>{t('LegalService.Service2.Service2-List4')}</li>
                            <li>{t('LegalService.Service2.Service2-List5')}</li>
                        </ol>
                    </Card.Text>
                    </Card.Body>
               </Card>
               <br/>
               <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title className="service-card-title">{t('LegalService.Service3.Service-no')}{t('LegalService.Service3.Service3-Title')}</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>{t('LegalService.Service3.Service3-List1')}</li>
                            <li>{t('LegalService.Service3.Service3-List2')}</li>
                        </ol>
                    </Card.Text>
                    </Card.Body>
               </Card>
               <br/>
               <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title className="service-card-title">{t('LegalService.Service4.Service-no')}{t('LegalService.Service4.Service4-Title')}</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>{t('LegalService.Service4.Service4-List1')}</li>
                        </ol>
                    </Card.Text>
                    </Card.Body>
               </Card>
               <br/>
               <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title className="service-card-title">{t('LegalService.Service5.Service-no')}{t('LegalService.Service5.Service5-Title')}</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>{t('LegalService.Service5.Service5-List1')}</li>
                            <li>{t('LegalService.Service5.Service5-List2')}</li>
                            <li>{t('LegalService.Service5.Service5-List3')}</li>
                            <li>{t('LegalService.Service5.Service5-List4')}</li>
                        </ol>
                    </Card.Text>
                    </Card.Body>
               </Card>
               <br/>
               <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title className="service-card-title">{t('LegalService.Service6.Service-no')}{t('LegalService.Service6.Service6-Title')}</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>{t('LegalService.Service6.Service6-List1')}</li>
                        </ol>
                    </Card.Text>
                    </Card.Body>
               </Card>
               <br/>
               <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title className="service-card-title">{t('LegalService.Service7.Service-no')}{t('LegalService.Service7.Service7-Title')}</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>{t('LegalService.Service7.Service7-List1')}</li>
                        </ol>
                    </Card.Text>
                    </Card.Body>
               </Card>
               <br/>
               <Card border="secondary" className="service-card">
                    <Card.Body>
                    <Card.Title  className="service-card-title">{t('LegalService.SpecialService.SS-Title')}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{t('LegalService.SpecialService.SS-List1')}</li>
                            <li>{t('LegalService.SpecialService.SS-List2')}</li>
                            <li>{t('LegalService.SpecialService.SS-List3')}</li>
                            <li>{t('LegalService.SpecialService.SS-List4')}</li>
                            <li>{t('LegalService.SpecialService.SS-List5')}</li>
                            <li>{t('LegalService.SpecialService.SS-List6')}</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
               </Card>
       
               <br/>

               <div className="service-info">
                    <div className="service-title">{t('LegalService.AdditionService.AS-Title')}</div>
                    <ul>
                        <li>{t('LegalService.AdditionService.AS-List1')}</li>
                        <li>{t('LegalService.AdditionService.AS-List2')}</li>
                        <li>{t('LegalService.AdditionService.AS-List3')}</li>
                        <li>{t('LegalService.AdditionService.AS-List4')}</li>
                    </ul>
                    
                </div>
            </Container>
             </Styles>
         )
}