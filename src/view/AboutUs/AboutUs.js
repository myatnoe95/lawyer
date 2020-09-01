import React from 'react';
import { FounderBlog } from '../../components/FounderBlog/FounderBlog';
import { ActivityBlog } from '../../components/ActivityBlog/ActivityBlog';

function AboutUs (props){
    return(
        <div>
            <h1>About of Us</h1>
            <FounderBlog/>
            <br></br>
            <ActivityBlog/>
        </div>
    )
}

export default AboutUs;