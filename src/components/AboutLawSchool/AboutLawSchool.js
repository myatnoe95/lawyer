import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {BiRevision} from 'react-icons/bi';
import {SiMicrostrategy} from 'react-icons/si';
import {TiArrowMaximise} from 'react-icons/ti';
import {FaBookOpen} from 'react-icons/fa';
import LawSchool from '../../assets/image/LawSchool.jpg';
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
    background-color: #fff;
    padding: 50px 30px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    text-align: center;
    height: 400px;
    margin-bottom: 25px;
}
.law-school-sec2-row2-column{
    // text-align: center;
    // background-color: #706e66;
    color: #101010;
    padding-top: 40px;
    padding-bottom:10px;
    margin-bottom:30px;
    z-index: -1;
}

.school_title{
    font-size: 40px;
}

.school_para{
    text-align: justified;
    font-size: 20px;
    margin-top: 20px;
    color:#5C7080;
}

.law-school-sec2-row2-ul{
    text-align: jusitied;
    font-size: 20px;
    margin-top: 20px;
    color:#5C7080;
    list-style-type: "* "
}
.law-school-sec2-h2{
    padding-bottom: 30px;
    text-align:center;
    font-size: 40px; 
    font-weight: bold;
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

 .mission-container{
     padding: 100px;
 }

 .mission-title{

 }

 .mission-para{

 }

 .img-div{
     padding: 70px 0;
 }

 @media(max-width: 480px){
     
 .mission-container{
    padding: 0px;
 }
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
                    <Col sm>
                        <h4 className="school_title"> <span><FaBookOpen size={55}/></span> {t('AboutLawSchool.SchoolAbout')}</h4>
                         <hr/>
                         <p className="school_para">{t('AboutLawSchool.Aboutinfo')}</p>
                         <ul type="none" className="law-school-sec2-row2-ul">
                                <li> {t('AboutLawSchool.AboutList1')}</li>
                                <li>{t('AboutLawSchool.AboutList2')}</li>
                                <li> {t('AboutLawSchool.AboutList3')}</li>
                                <li>{t('AboutLawSchool.AboutList4')}</li>
                                <li> {t('AboutLawSchool.AboutList5')}</li>
                                <li>{t('AboutLawSchool.AboutList6')}</li>
                            </ul>  
                    </Col>

                    <Col sm>
                        <div className="img-div">
                           <img src={LawSchool} className="img" fluid ></img>
                        </div>
                       
                        </Col>
                </Row>
            </Container>
                
            <Container className="mission-container">
                <Row>
                    <Col xs={12} md={4}>
                        <div className="law-school-sec2-row1-column">
                            <span><BiRevision size={55}/></span><br/><br></br>
                            <h4 className="mission-title">{t('AboutLawSchool.SchoolVision')}</h4><br/>
                            <p className="mission-para">{t('AboutLawSchool.SchoolVision-para')}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="law-school-sec2-row1-column">
                            <span><TiArrowMaximise size={55}/></span><br/><br></br>
                            <h4 className="mission-title">{t('AboutLawSchool.SchoolMission')}</h4><br/>
                            <p className="mission-para">{t('AboutLawSchool.SchoolMission-para')}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="law-school-sec2-row1-column">
                            <span><SiMicrostrategy size={55}/></span><br/><br></br>
                            <h4 className="mission-title">{t('AboutLawSchool.Strategy')}</h4><br/>
                            <p className="mission-para">{t('AboutLawSchool.Strategy-para')}</p>
                        </div>
                    </Col>
                </Row>
               
            </Container>
    </div>
</Styles>
    )
}
