import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bannerimg from '../../assets/image/img3.jpg';
import bannerimg1 from '../../assets/image/uphoephyu.jpg';
import LawFirm from '../../assets/image/banner.jpg';

const Styles =styled.div`
   .jumbo{
    background-image: url(${LawFirm});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 700px;

    //    background: url(${LawFirm}) no-repeat fixed bottom;
    //    background-size: cover;
    //    color: #efefef;
    //    height: 700px;
    //    position: relative;
    //    z-index: -2;
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
       margin-top: 35vh;
       text-align: center;
       font-style: italic;
       font-weight: bold;
       color: #fff;
       font-size: 46px;
   }

   @media(max-width:480px){
    .jumbo{
        height: auto;
        background-size: cover;
    }

    h1{
        margin-top: 10vh;
        font-size: 26px;
    }
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