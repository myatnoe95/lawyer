import React from 'react';
import Mission from '../../components/Mission/Mission';
import LegalService from '../../components/LegalService/LegalService';
import { PracticeArea } from '../../components/PracticeArea/PracticeArea';

function LawFirm (props){
    return(
        <div>
            {/* <h1>LawFirm</h1> */}
            <Mission/>
             <br></br>
            <PracticeArea/>
            <br></br>
            <LegalService/>
        </div>
    )
}

export default LawFirm;