import React from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`
   .home-info{
    
   }

   .home-title{
        font-size: 40px;
        text-align: center;
   }

   .home-subtitle{
        font-size: 35px;
        text-align: center;
   }


   ul{
    color:#5C7080;
    font-size: 25px; 
    margin-top: 40px;
    text-align: center;
    list-style-type: none;
   }

   li{

   }

  

`;

export function HomeComponent(props){

    const { t } = useTranslation();

    return(
        <Styles>
             <div className="home-info">
                    <div className="home-title">{t('HomeComponent.Title')}</div>
                      <div className="home-subtitle">{t('HomeComponent.Subtitle')}</div>
                        <ul>
                            <li>{t('HomeComponent.List1')}</li>
                            <li>{t('HomeComponent.List2')}</li>
                            <li>{t('HomeComponent.List3')}</li>
                        </ul>
              </div>
        </Styles>
    )
}