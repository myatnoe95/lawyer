import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { useTranslation } from 'react-i18next';

Moment.locale('en')
momentLocalizer()


const Styles =  styled.div`

.law-school-sec3{
    padding-top: 40px;
    background-color:whitesmoke;
}
.law-school-sec3-h2{
    padding-bottom: 10px;
}
p{
    text-align: justified;
    font-size: 20px;
    margin-top: 20px;
    color:#5C7080;
}

ul{
    color:#5C7080;
    font-size: 20px;
    margin-top: 30px;
 }

`;

export default function LawSchoolInfo(props){

    const { t } = useTranslation();

    return(
<Styles>
    <div className="law-school-sec3">
        <Container>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.InfoBlog1.InfoBlog1-Title')}</h2>
                                <p>{t('LawSchoolInfo.InfoBlog1.InfoBlog1-para')}</p>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.InfoBlog2.InfoBlog2-Title')}</h2>
                                <p>{t('LawSchoolInfo.InfoBlog2.InfoBlog2-para')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.InfoBlog3.InfoBlog3-Title')}</h2>
                                <p>{t('LawSchoolInfo.InfoBlog3.InfoBlog3-para')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.InfoBlog4.InfoBlog4-Title')}</h2>
                                <p>{t('LawSchoolInfo.InfoBlog4.InfoBlog4-para')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.InfoBlog5.InfoBlog5-Title')}</h2>
                                <p>{t('LawSchoolInfo.InfoBlog5.InfoBlog5-para')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.InfoBlog6.InfoBlog6-Title')}</h2>
                                <p>{t('LawSchoolInfo.InfoBlog6.InfoBlog6-para')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.InfoBlog7.InfoBlog7-Title')}</h2>
                                <p>{t('LawSchoolInfo.InfoBlog7.InfoBlog7-para')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">{t('LawSchoolInfo.ProgramBlog.ProgramBlog-Title')}</h2>
                                <p>{t('LawSchoolInfo.ProgramBlog.ProgramBlog-para')}</p>
                                <ul>
                                    <li>{t('LawSchoolInfo.ProgramBlog.ProgramBlogList1')}</li>
                                    <li>{t('LawSchoolInfo.ProgramBlog.ProgramBlogList2')}</li>
                                    <li>{t('LawSchoolInfo.ProgramBlog.ProgramBlogList3')}</li>
                                    <li>{t('LawSchoolInfo.ProgramBlog.ProgramBlogList4')}</li>
                                    <li>{t('LawSchoolInfo.ProgramBlog.ProgramBlogList5')}</li>
                                    <li>{t('LawSchoolInfo.ProgramBlog.ProgramBlogList6')}</li>
                                </ul>
                                <p>{t('LawSchoolInfo.ProgramBlog.ProgramBlog-para1')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">Executive LL.M in International Trade Law and Human Rights Legal Practice</h2>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <h5>Core Modules</h5>
                                        <ul>
                                            <li>Law of the World Trade Organization and Human Rights Instruments</li>
                                            <li>International Competition and Consumer Rights Law</li>
                                            <li>International Commercial Dispute Resolution and Litigation</li>
                                            <li>International Sale of Goods</li>
                                            <li>International Carriage of Goods</li>
                                            <li>Legal Research Skill and Methods, and Dissertation</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <h5>Optional Modules</h5>
                                        <ul>
                                            <li>Technology and Cyber Law</li>
                                            <li>Intellectual Property Law</li>
                                            <li>International Economic Law</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">Executive LL.M in International Commercial Lawand Human Rights Legal Practice</h2>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <h5>Core Modules</h5>
                                        <ul>
                                            <li>Foundation of International Commercial Law and Human Rights Instruments</li>
                                            <li>International Competition and Consumer Rights Law</li>
                                            <li>International Commercial Dispute Resolution and Litigation</li>
                                            <li>Principles of International Commercial Contracts</li>
                                            <li>International Commercial Payments</li>
                                            <li>Legal Research Skill and Methods, and Dissertation</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <h5>Optional Modules</h5>
                                        <ul>
                                            <li>Technology and Cyber Law</li>
                                            <li>Intellectual Property Law</li>
                                            <li>International Economic Law</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">Executive LL.M in International Business Law and Human Rights Legal Practice</h2>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <h5>Core Modules</h5>
                                        <ul>
                                            <li>Foundation of International Commercial Law and Human Rights Instruments</li>
                                            <li>International Competition and Consumer Rights Law</li>
                                            <li>International Commercial Dispute Resolution and Litigation</li>
                                            <li>Principles of International Commercial Contracts and Payments</li>
                                            <li>Comparative Company Laws and Corporate Governance</li>
                                            <li>Legal Research Skill and Methods, and Dissertation</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <h5>Optional Modules</h5>
                                        <ul>
                                            <li>Technology and Cyber Law</li>
                                            <li>Intellectual Property Law</li>
                                            <li>International Economic Law</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">Executive LL.M in Real Estate Law and Human Rights Legal Practice</h2>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <h5>Core Modules</h5>
                                        <ul>
                                            <li>Principles of Real Estate Law and Human Rights Instruments</li>
                                            <li>Civil Laws and Civil Procedure Law</li>
                                            <li>Lower & Upper Burma Land and Revenue Law</li>
                                            <li>Town & Village Land Law and Farm Land & Virgin Land Law</li>
                                            <li>Principles of Law of Acquisitions</li>
                                            <li>Legal Research Skill and Methods, and Dissertation</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <h5>Optional Modules</h5>
                                        <ul>
                                            <li>Technology and Cyber Law</li>
                                            <li>Business Law</li>
                                            <li>International Economic Law</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">Executive LL.M in Strategic litigation Management and Court Practice</h2>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <h5>Core Modules</h5>
                                        <ul>
                                            <li>Principles of Legal Professional Responsibilities and Human Rights Instruments</li>
                                            <li>Civil Laws and Civil Procedure Law</li>
                                            <li>Criminal Laws and Criminal Procedure Law</li>
                                            <li>Principles of Law of Torts</li>
                                            <li>Principles of Law of Evidence</li>
                                            <li>Legal Research Skill and Methods, and Dissertation</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <h5>Optional Modules</h5>
                                        <ul>
                                            <li>Technology and Cyber Law</li>
                                            <li>Business Law</li>
                                            <li>International Economic Law</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="law-school-sec3-h2">LL.M in Constitutional and Administrative Law</h2>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <h5>Core Modules</h5>
                                        <ul>
                                            <li>Principles of Constitutional Law and Human Rights Instruments</li>
                                            <li>Legislation Process of Constitution</li>
                                            <li>Theories of Constitutional Law</li>
                                            <li>Principles of Administrative Law and Human Rights Instruments</li>
                                            <li>Theories of Administrative Law</li>
                                            <li>Legal Research Skill and Methods, and Dissertation</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <h5>Optional Modules</h5>
                                        <ul>
                                            <li>Technology and Cyber Law</li>
                                            <li>Business Law</li>
                                            <li>International Economic Law</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
</Styles>
    )
}