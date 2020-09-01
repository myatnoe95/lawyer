import React from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .title{
       font-size: 35px;
       font-weight: bold;
   }

   .sub_title{
       font-size: 20px;
       font-weight: bold;
   }
   
   .text{
       margin-top: 30px;
   }

   ul{
     
   }

   li{
    font-size: 20px;
   }

`;

export function HomeComponent(props){
    return(
        <Styles>
            <Card  border="secondary" className="text-center">
                <Card.Body>
                    <Card.Title className="title">PhoePhyu & Associates</Card.Title>
                    <Card.Subtitle className="sub_title"> is a private company limited which serves the following services.</Card.Subtitle>
                    <Card.Text className="text">
                    <ul>
                        <li>Legal Services under the Name of Phoe Phyu & Associates Law Firm</li>
                        <li>Writing and Publication of Books concerning with Law and Legal Processing in the name of Phoe Phyu & Associates Law Book Publication</li>
                        <li>Teaching Law and it's realm by the name of Phoe Phyu School of Law</li>
                    </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Styles>
    )
}