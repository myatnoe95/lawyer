import React from 'react';
import {Card, Container,Row,Col,Media} from 'react-bootstrap';
import bannerimg from '../../assets/image/img3.jpg';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`



 .img{
     width:100%;
     height: auto; 
     object-fit: cover;
 }
 p{
    text-align: justify;
    font-size: 20px;
    color:#5C7080;  
 }
  .main{
   background-color:#202B33;
   margin-top: 40px; 
   color: white;
   padding: 100px;
}

.container{
}

 @media(max-width:480px){
     .img{
        width: 300px;
        height: 250px;
     }
     .img{
        width: 300px;
        height: 250px;
     }
 }

`;

export default function  FounderBlog (props) {

   const { t } = useTranslation();

    return(
      <Styles>
             <Card>
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Container fluid>
                    <Row>
                           <Col sm ={6}>
                              <img src={bannerimg} className="img"></img>
                           </Col>
                           <Col sm={6}>
                              <h1>{t('FounderBlog.Founder-Title')}</h1>
                              <p>{t('FounderBlog.Founder-para')}</p>
                              <br></br>
                              <h1>{t('FounderBlog.Prizes-Title')}</h1>
                              <p>{t('FounderBlog.Prizes-para')}</p>
                              <br></br>
                              <h1>{t('FounderBlog.Present-Title')}</h1>
                              <p>{t('FounderBlog.Present-para')}</p>
                           </Col>
                     </Row>
                    </Container>
                    </Card.Body>
                </Card>

            {/* <Container fluid className="container">
            <Row>
                  <Col sm>
                     <img src={bannerimg} className="img"></img>
                  </Col>
                  <Col sm>
                     <h1>{t('FounderBlog.Founder-Title')}</h1>
                     <p>{t('FounderBlog.Founder-para')}</p>
                     <br></br>
                     <h1>{t('FounderBlog.Prizes-Title')}</h1>
                     <p>{t('FounderBlog.Prizes-para')}</p>
                     <br></br>
                     <h1>{t('FounderBlog.Present-Title')}</h1>
                     <p>{t('FounderBlog.Present-para')}</p>
                  </Col>
            </Row>
            </Container> */}
       

      </Styles>

    )
}
   
