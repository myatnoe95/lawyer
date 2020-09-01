import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bannerimg from '../../assets/image/img3.jpg';

const Styles =styled.div`
   .jumbo{
       background: url(${bannerimg}) no-repeat fixed bottom;
       background-size: cover;
       color: #efefef;
       height: 500px;
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