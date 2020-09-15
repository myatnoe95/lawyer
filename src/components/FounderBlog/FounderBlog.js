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
  
.founder-card{
   background-color:#f7f9fd;
}

.blog{
   border-left: 5px solid #dee2e6;
   padding-left: 15px;
}

.blog-container{
   padding: 100px 0;
}


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

hr{
   width: 60px;
   height: 3px;
   background-color:#eac15a;
   margin-left: 0;
   border: none;
}

 @media(max-width:480px){
     .img{
        width: 300px;
        height: 250px;
        object-fit: cover;
     }
     .img{
        width: 100%;
        height: 250px;
     }
     .blog{
      border: none;
      padding-left: 15px;
      margin-top: 20px;
      }

      .blog-container{
         padding: 50px 0;
      }

      

      
 }

`;

export default function  FounderBlog (props) {

   const { t } = useTranslation();

    return(
      <Styles>
             {/* <Card className="founder-card">
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
                </Card> */}
         <div className="blog-container">
            <Container fluid>
            <Row>
                  <Col sm>
                     <img src={bannerimg} className="img"></img>
                  </Col>
                  <Col sm>
                     <div className="blog">
                     <h1>{t('FounderBlog.Founder-Title')}</h1>
                     <hr/>
                     <p>{t('FounderBlog.Founder-para')}</p>
                     <br></br>
                     <h1>{t('FounderBlog.Prizes-Title')}</h1>
                     <hr/>
                     <p>{t('FounderBlog.Prizes-para')}</p>
                     <br></br>
                     <h1>{t('FounderBlog.Present-Title')}</h1>
                     <hr/>
                     <p>{t('FounderBlog.Present-para')}</p>
                     </div>
                  </Col>
            </Row>
            </Container>
            </div>

      </Styles>

    )
}
   
