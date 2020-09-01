import React from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .title{
       font-size: 30px;
       font-weight: bold;
   }

   .about{
      text-align: justify;
      font-size: 18px;
      color: #202B33;   
   }

`;

export const FounderBlog = (props) =>(
    <Styles>
        <Card>
            <Card.Body>
            <Card.Title className="title">About Founder</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text className="about">
                Phoe Phyu is a Founder and CEO of Phoe Phyu & Associates Business. He is also an Activist Lawyer and was arrested owing to taking part in 2007 Saffron Movement. After being released, he presented the case for sangha and activists of politics and human rights who were detained during saffron movement. In addition, he carried out in the movement of labour-right and farm land ownership.
            </Card.Text>

            <Card.Title className="title">Prizes Award</Card.Title>
            <Card.Text className="about">
            Citizen of Burma Award in 2011 and 2012
            </Card.Text>

            <Card.Title className="title">Studying at present</Card.Title>
            <Card.Text className="about">
                After being released from prison, he was banned from studying an year law master course in Dagon University of Yangon. However, he is allowed by the University Essex,UK to take L.L.M (International Trade & Commercial Law) through Kaplan.
            </Card.Text>

            </Card.Body>
        </Card>
    </Styles>
)
