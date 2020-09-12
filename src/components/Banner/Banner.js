import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bannerimg from '../../assets/image/img3.jpg';
import bannerimg1 from '../../assets/image/uphoephyu.jpg'

const Styles =styled.div`
   .jumbo{
       background: url(${bannerimg1}) no-repeat fixed bottom;
       background-size: cover;
       color: #efefef;
       height: 700px;
       position: relative;
       z-index: -2;
   }

   .overlay{
       background-color: #000;
       opacity: 0.6;
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       z-index: -1;
   }

   h1{
       margin-top: 180px;
       text-align: center;
       font-style: italic;
       font-weight: bold;
       color: #CED9E0;

  
`;

export const Jumbotron = (props)=>(
    <Styles>
        <Jumbo  className="jumbo">
            <div className="overlay"></div>
             <Container>
                 <h1>For Your Business Consultant</h1>
             </Container>
        </Jumbo>
     </Styles>
   
)