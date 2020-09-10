import React from 'react';
import {HomeComponent} from '../../components/HomeComponent/HomeComponent';
import { PracticeArea } from '../../components/PracticeArea/PracticeArea';


function Home (props){
    return(
        <div>
            <HomeComponent/>
            <br></br>
            <br></br>
            <PracticeArea/>
        </div>

    )
}

export default Home;