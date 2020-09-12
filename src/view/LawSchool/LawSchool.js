import React from 'react';
import AboutLawSchool from '../../components/AboutLawSchool/AboutLawSchool';
import LawSchoolInfo from '../../components/LawSchoolInfo/LawSchoolInfo';
import styled from 'styled-components';

const Styles = styled.div`
   
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1500px !important;
    }
    
   }
`;


function LawSchool (props){
    return(
    <Styles>
        <div>
            <AboutLawSchool/>
            <LawSchoolInfo/>
        </div>      
    </Styles>
    )
}

export default LawSchool;