import React from 'react';
import styled from 'styled-components';
import {Row,Col, Image, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,  faHome , faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`

   .practice-area{
      margin-bottom: 70px;
   }
   .pra-title{
       text-align: center;
       font-size: 35px;
       font-weight: bold;
   }
   .container{
       text-align: center;
       height: 200px;
   }
   .icon{
      margin: 30px auto;
   }
   .icon-info{
       font-size: 25px;
   }
 
`;


export function PracticeArea (props){

   const { t } = useTranslation();

   return(
      <Styles>
      <div className="practice-area">
             <div className="pra-title">Practice Areas</div>

             <Container className="container">
                 <Row>
                     <Col>
                     <div className="icon">
                        <FontAwesomeIcon icon={faBriefcase} color="#20163C" size="5x" />
                     </div>
                     <div className="icon-info">{t('PracticeArea.Economy')}</div>
                     </Col>

                     <Col>
                     <div className="icon">
                        <FontAwesomeIcon icon={faHome}  color="#20163C" size="5x" />
                     </div>
                     <div className="icon-info">{t('PracticeArea.Land-disputes')}</div>
                     </Col>
                     
                     <Col>
                     <div className="icon">
                        <FontAwesomeIcon icon={faMoneyBill}  color="#20163C" size="5x" />
                     </div>
                     <div className="icon-info">{t('PracticeArea.Trade')}</div>
                     </Col>
                 </Row>
             </Container>
             
       </div>
 </Styles>
   )
}
   