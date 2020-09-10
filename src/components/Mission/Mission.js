import React from 'react';
import {Card, CardGroup, Container} from 'react-bootstrap';
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

  .icon_size{
    margin-top: 10px;
    margin-bottom: 10px;
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
  
`; 

export  default function Mission (props){

    const { t } = useTranslation();

    return(
        <Styles>
       
             
        <div className="business-info">
            <h1 className="business-title">{t('Mission.Business-Title')}</h1>
            <p className="business-para">{t('Mission.Business-para')}</p>
        </div>

     <Container fluid="md">
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
        </Container>
    </Styles>
    )
} 