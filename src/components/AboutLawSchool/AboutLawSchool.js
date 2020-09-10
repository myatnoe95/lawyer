import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {BiRevision} from 'react-icons/bi';
import {SiMicrostrategy} from 'react-icons/si';
import {TiArrowMaximise} from 'react-icons/ti';
import {FaBookOpen} from 'react-icons/fa';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()

const Styles = styled.div`
.law-school-sec2{
    padding-top: 40px;
    padding-bottom: 30px;
}
.law-school-sec2-row1-column{
    text-align: center;
    background-color: #706e66;
    color: white;
    padding-top: 40px;
    padding-bottom:10px;
    margin-bottom: 30px;
    z-index: -1;
    height: 350px;
}
.law-school-sec2-row2-column{
    text-align: center;
    background-color: #706e66;
    color: white;
    padding-top: 40px;
    padding-bottom:10px;
    margin-bottom:30px;
    z-index: -1;
}
.law-school-sec2-row2-ul{
    text-align: center;
}
.law-school-sec2-h2{
    padding-bottom: 30px;
    text-align:center;
}
`;

export default function AboutLawSchool (props){

    const { t } = useTranslation();

    return(
    <Styles>
        <div className="law-school-sec2">
         <h2 className="law-school-sec2-h2">{t('AboutLawSchool.AboutSchoolTitle')}</h2>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="law-school-sec2-row1-column">
                            <span><BiRevision size={50}/></span><br/><br></br>
                            <h4>{t('AboutLawSchool.SchoolVision')}</h4><br/>
                            <p>{t('AboutLawSchool.SchoolVision-para')}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="law-school-sec2-row1-column">
                            <span><TiArrowMaximise size={50}/></span><br/><br></br>
                            <h4>{t('AboutLawSchool.SchoolMission')}</h4><br/>
                            <p>{t('AboutLawSchool.SchoolMission-para')}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="law-school-sec2-row1-column">
                            <span><SiMicrostrategy size={50}/></span><br/><br></br>
                            <h4>{t('AboutLawSchool.Strategy')}</h4><br/>
                            <p>{t('AboutLawSchool.Strategy-para')}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="law-school-sec2-row2-column">
                            <span><FaBookOpen size={50}/></span><br/><br></br>
                            <h4>{t('AboutLawSchool.SchoolAbout')}</h4><br/>
                            <p>{t('AboutLawSchool.Aboutinfo')}</p>
                            <ul type="none" className="law-school-sec2-row2-ul">
                                <li>- {t('AboutLawSchool.AboutList1')}</li>
                                <li>- {t('AboutLawSchool.AboutList2')}</li>
                                <li>- {t('AboutLawSchool.AboutList3')}</li>
                                <li>- {t('AboutLawSchool.AboutList4')}</li>
                                <li>- {t('AboutLawSchool.AboutList5')}</li>
                                <li>- {t('AboutLawSchool.AboutList6')}</li>
                            </ul>   
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
</Styles>
    )
}
