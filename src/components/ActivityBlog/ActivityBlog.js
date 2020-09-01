import React from 'react';
import {Card, Container,Row,Col} from 'react-bootstrap';
import bannerimg from '../../assets/image/img3.jpg';
import styled from 'styled-components';


const Styles = styled.div`

  .card{
     width: 1200px;
     height: 800px;
  }
  .img{
      width:650px;
      height: 600px;
  }
`;

export const ActivityBlog = (props) => (
    <Styles>
    <Card className="card">
        <Card.Body>
        <Card.Title></Card.Title>
           <Container>
           <Row>
                <Col xs={12} md={8}>
                   <img src={bannerimg} className="img"></img>
                </Col>
                <Col xs={6} md={4}>
                    <h1>Movement for the Rights of Land</h1>
                    <p>The most conspicuous is that he performed as a lawyer in case of compelling the farmers to grow “ Castor Oil Plant '' by military - weapon - factory on the farm-land ( about ten thousand area ) in natmauk township, Magwe Division. For performing it, he was sentenced to four years in prison. However, by the pressure of the International Labour Organization (ILO) on the military regime,he stayed in prison only one year and just over three months. It was judged by Full Banch of Supreme Court. While conducting this case, filing a Suit in ILO, he was able to do to return the farmland of over ten thousand areas towards peasants and farmers who are the actual owner of these lands. Besides that, at the beginning of 2014, billions of Myanmar currency for the farmland of ten thousand areas were received as a compensation. It was for the farm land seized by 16 crony-companies during military regime in 2008. While conducting this case, he was taken into Custody two times.</p>
                </Col>
           </Row>
           </Container>
        </Card.Body>
  </Card>
  </Styles>
)