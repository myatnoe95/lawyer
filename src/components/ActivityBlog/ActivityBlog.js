import React from 'react';
import {Card, Container,Row,Col} from 'react-bootstrap';
import bannerimg from '../../assets/image/img3.jpg';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()


const Styles = styled.div`
  .card{
  
  }

  .img{
      width:500px;
      height: 600px;
      object-fit: cover;
  }
  
  p{
    text-align: justify;
    font-size: 20px;
    color:#5C7080;  
 }

 ul,li{
    font-size: 20px;
    margin-top: 10px;
 }

  @media(max-width:480px){
    .card img{
        width: 300px;
        height: 250px;
    }
}
`;

export default function ActivityBlog (props) {

    const { t } = useTranslation();

    return(
        <Styles>
                <Card className="card">
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Container>
                    <Row>
                            <Col sm>
                                <h1>{t('ActivityBlog.Blog1.Blog-Title')}</h1>
                                <p>{t('ActivityBlog.Blog1.Blog-para')}</p>
                            </Col>
                            <Col sm>
                                <img src={bannerimg} className="img"></img>
                            </Col>
                    </Row>
                    </Container>
                    <br></br> 
                    <br></br>
                    <hr></hr>
                    <br></br> 
                    <br></br>
                    <Container>
                    <Row>
                            <Col sm>
                                <img src={bannerimg} className="img"></img>
                            </Col>
                            <Col sm>
                                <h1>{t('ActivityBlog.Blog2.Blog-Title')}</h1>
                                <p>{t('ActivityBlog.Blog2.Blog-para')}</p>
                            </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Container>
                    <Row>
                            <Col sm>
                                <h1>{t('ActivityBlog.Blog3.Blog-Title')}</h1>
                                <p>{t('ActivityBlog.Blog3.Blog-para')}</p>  
                            </Col>
                            <Col sm>
                                <img src={bannerimg} className="img"></img>
                            </Col>
                    </Row>
                    </Container>
                    <br></br> 
                    <br></br>
                    <hr></hr>
                    <br></br> 
                    <br></br>
                    <Container>
                    <Row>
                            <Col sm>
                                <img src={bannerimg} className="img"></img>
                            </Col>
                            <Col sm>
                            <h1>{t('ActivityBlog.RelatedBlog.Blog-Title')}</h1>
                                <p>{t('ActivityBlog.RelatedBlog.Blog-para')}</p>
                                   <ul>
                                       <li>{t('ActivityBlog.RelatedBlog.List1')}</li>
                                       <li>{t('ActivityBlog.RelatedBlog.List2')}</li>
                                       <li>{t('ActivityBlog.RelatedBlog.List3')}</li>
                                   </ul>
                            </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                </Card>
        </Styles>
    )
} 
    