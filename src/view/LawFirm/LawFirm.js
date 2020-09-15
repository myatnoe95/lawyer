import React from 'react';
import Mission from '../../components/Mission/Mission';
import {Container,Row,Col} from 'react-bootstrap';
import LegalService from '../../components/LegalService/LegalService';
import { PracticeArea } from '../../components/PracticeArea/PracticeArea';
import LawFirmImg from '../../assets/image/law.jpg';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Styles = styled.div`

.container{
    margin-top: 100px;
}

.business-info{
    margin: 20px auto;
    width: 60%;
}
.business-title{
    // text-align: center;
    font-size: 40px;
    margin-bottom: 30px;

}

.business-para{
    text-align: justified;
    font-size: 20px;
    margin-top: 20px;
    color:#5C7080;
}

.img{
    width: 100%;
    height: auto;
}

hr{
    width: 60px;
    height: 3px;
    background-color:#eac15a;
    margin-left: 0;
    border: none;
 }

@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1500px !important;
    }
    
   }

@media(max-width: 480px){
    .business-title{
        font-size: 32px;  
    }
}
`;

Moment.locale('en')
momentLocalizer()

function LawFirm (props){
    const { t } = useTranslation();
    return(
        <Styles>
            <div>
                <Container className="container">
                    <Row>
                        <Col sm>
                         <h1 className="business-title">{t('Mission.Business-Title')}</h1>
                         <hr/>
                         <p className="business-para">{t('Mission.Business-para')}</p>
                        
                        </Col>

                        <Col sm>
                           <img src={LawFirmImg} className="img" fluid ></img>
                        </Col>
                    </Row>
                </Container>
                {/* <div className="business-info">
                    <h1 className="business-title">{t('Mission.Business-Title')}</h1>
                    <p className="business-para">{t('Mission.Business-para')}</p>
                </div> */}
                {/* <Mission/> */}
                <br></br>
                <LegalService/>
                <br></br>
                {/* <PracticeArea/> */}
        </div>
        </Styles>
    )

}

export default LawFirm;