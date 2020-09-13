import React from 'react';
import {Card, CardGroup, Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';
import personimg from '../../assets/image/lawyer.png';
import icon1 from '../../assets/icon/icon1.png';
import icon2 from '../../assets/icon/icon2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faUserTie , faBullseye ,faFlagCheckered} from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`

  .card{
    margin-top: 30px; 
    color: #efefef;
  }
  .icon{
      margin-bottom: 15px;
  }
  .icon_size{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .row{
      padding: 70px 0;
  }

  .business-info{
      margin: 20px auto;
      width: 60%;
  }
  .business-title{
      text-align: center;
      font-size: 40px;
      margin-bottom: 30px;
 
  }
  .business-para{
      text-align: justified;
      font-size: 20px;
      margin-top: 20px;
      color:#5C7080;
  }
  .card-title{
      margin-top:10px;
  }
  .section{
      background-color: #fff;
      padding: 50px 30px;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      text-align: center;
      margin-left:15px;
      margin-right:15px;
  }
  hr{
     width: 45px;
     height: 3px;
     background-color:#eac15a;
     margin: 0 auto;
     border: none;
  }
  p{
      margin-top: 15px;
  }

  @media(max-width:480px){
      .section{
          margin-bottom: 35px;
      }
  }
  
`; 

export  default function Mission (props){

    const { t } = useTranslation();

    return(
        <Styles>
       
             
        {/* <div className="business-info">
            <h1 className="business-title">{t('Mission.Business-Title')}</h1>
            <p className="business-para">{t('Mission.Business-para')}</p>
        </div> */}
         <Container fluid>
                 <Row className="row">
                     <Col sm className="section">
                     <div className="icon">
                     <FontAwesomeIcon icon={faEye}  size="5x" color="red" className="icon_size" />
                     </div>
                     <h3>{t('Mission.Vision')}</h3>
                     <hr/>
                    <p>{t('Mission.Vision-para')}</p>
                     </Col>

                     <Col  sm className="section">
                     <div className="icon">
                     <FontAwesomeIcon icon={faFlagCheckered}  size="5x" color="blue" className="icon_size" />
                     </div>
                     <h3>{t('Mission.Mission')}</h3>
                     <hr/>
                    <p>{t('Mission.Mission-para')}</p>
                     </Col>
                     
                     <Col sm  className="section" >
                     <div className="icon">
                     <FontAwesomeIcon icon={faBullseye}  size="4x" color="tomato" className="icon_size" />
                     </div>
                     <h3>{t('Mission.Aim')}</h3>
                     <hr/>
                    <p>{t('Mission.Aim-para')}</p>
                     </Col>

                     <Col sm className="section">
                     <div className="icon">
                     <FontAwesomeIcon icon={faUserTie}  size="4x" className="icon_size" />
                     </div>
                     <h3>{t('Mission.Conviction')}</h3>
                     <hr/>
                    <p>{t('Mission.Conviction-para')}</p>
                     </Col>
                 </Row>
             </Container>

     {/* <Container fluid>
        
        <CardGroup>
            <Card bg="dark" className="text-center card">
                <div className="icon_size">
                    <FontAwesomeIcon icon={faEye}  size="5x" className="icon_size" />
                </div>
                <Card.Body>
                <Card.Title className="card-title">{t('Mission.Vision')}</Card.Title>
                <Card.Text>
                   {t('Mission.Vision-para')}
                </Card.Text>
                </Card.Body>
            </Card>

            <Card   bg="dark" className="text-center card">
                <div className="icon_size">
                    <FontAwesomeIcon icon={faFlagCheckered}  size="5x" className="icon_size" />
                </div>
                <Card.Body>
                <Card.Title className="card-title">{t('Mission.Mission')}</Card.Title>
                <Card.Text>
                    {t('Mission.Mission-para')}
                </Card.Text>
                </Card.Body>
            </Card>

            <Card  bg="dark" className="text-center card">
                <div className="icon_size">
                    <FontAwesomeIcon icon={faBullseye}  size="4x" className="icon_size" />
                </div>
                <Card.Body>
                <Card.Title className="card-title">{t('Mission.Aim')}</Card.Title>
                <Card.Text>
                    {t('Mission.Aim-para')}
                </Card.Text>
                </Card.Body>
            </Card>

            <Card  bg="dark" className="text-center card">
                <div className="icon_size">
                    <FontAwesomeIcon icon={faUserTie}  size="4x" className="icon_size" />
                </div>
                <Card.Body>
                <Card.Title className="card-title">{t('Mission.Conviction')}</Card.Title>
                <Card.Text>
                    {t('Mission.Conviction-para')}
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        </Container> */}
    </Styles>
    )
} 