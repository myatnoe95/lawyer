import React from 'react';
import  FounderBlog  from '../../components/FounderBlog/FounderBlog';
import  ActivityBlog  from '../../components/ActivityBlog/ActivityBlog';
import Members from '../../components/Members/Members';
import {Container} from 'react-bootstrap';

function AboutUs (props){
    return(
        <div>
            {/* <h1>About of Us</h1> */}
            <FounderBlog/>
            <br></br>
            <ActivityBlog/>
            <br></br>
            <Members/>
        </div>
    )
}

export default AboutUs;