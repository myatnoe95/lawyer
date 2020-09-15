import React from 'react';
import {Card, Container,Row,Col} from 'react-bootstrap';
import Activityimg from '../../assets/image/upp.jpg';
import Activityimg1 from '../../assets/image/upp1.jpg';
import Activityimg2 from '../../assets/image/upp2.jpg';
import Activityimg3 from '../../assets/image/upp3.jpg';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()


const Styles = styled.div`

  .activity-title{
    font-weight: bold;
    text-align: center;
    padding: 50px 0;
    font-style: italic;
  }

  .activity-card1{
  
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

 ul,li{
    font-size: 20px;
    margin-top: 10px;
 }
 .line{
    width: 60px;
    height: 3px;
    background-color:#eac15a;
    margin-left: 0;
    border: none;
 }


  @media(max-width:480px){
    .card img{
        width: 300px;
        height: 250px;
    }
    .activity-title{
        padding: 30px 0;
      }
    h1{
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
    }
    p{
        font-size: 18px;
    }
    ul,li{
        font-size: 18px;
    }
}
`;

export default function ActivityBlog (props) {

    const { t } = useTranslation();

    return(
        <Styles>
             <h1 className="activity-title">
                 Our Movements / Our Activities
            </h1>
             
                <Card className="activity-card1">
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Container fluid>
                    <Row>
                            <Col sm>
                                <h1>{t('ActivityBlog.Blog1.Blog-Title')}</h1>
                                <hr className="line"/>
                                <p>{t('ActivityBlog.Blog1.Blog-para')}</p>
                            </Col>
                            <Col sm>
                                <img src={Activityimg} className="img"></img>
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
                                <img src={Activityimg1} className="img"></img>
                            </Col>
                            <Col sm>
                                <h1>{t('ActivityBlog.Blog2.Blog-Title')}</h1>
                                <hr className="line"/>
                                <p>{t('ActivityBlog.Blog2.Blog-para')}</p>
                            </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                </Card>

                <Card className="activity-card2">
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Container fluid>
                    <Row>
                            <Col sm>
                                <h1>{t('ActivityBlog.Blog3.Blog-Title')}</h1>
                                <hr className="line"/>
                                <p>{t('ActivityBlog.Blog3.Blog-para')}</p>
                            </Col>
                            <Col sm>
                                <img src={Activityimg2} className="img"></img>
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
                                <img src={Activityimg3} className="img"></img>
                            </Col>
                            <Col sm>
                               <h1>{t('ActivityBlog.RelatedBlog.Blog-Title')}</h1>
                               <hr className="line"/>
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
    