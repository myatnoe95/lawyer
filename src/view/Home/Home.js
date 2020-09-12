import React from 'react';
import {HomeComponent} from '../../components/HomeComponent/HomeComponent';
import { PracticeArea } from '../../components/PracticeArea/PracticeArea';
import Mission from '../../components/Mission/Mission';
import styled from 'styled-components';

const Styles = styled.div`
   
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1500px !important;
    }
    
   }
`;


function Home (props){
    return(
    <Styles>
        <div>
            <HomeComponent/>
            <br></br>
            <Mission/>
            <br></br>
            <PracticeArea/>
        </div>
    </Styles>
    )
}

export default Home;