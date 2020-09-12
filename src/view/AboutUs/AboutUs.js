import React, { Component } from 'react';
import  FounderBlog  from '../../components/FounderBlog/FounderBlog';
import  ActivityBlog  from '../../components/ActivityBlog/ActivityBlog';
import Members from '../../components/Members/Members';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1500px !important;
    }
    
   }
`;



class  AboutUs extends Component{
    render(){
        return(
            <Styles>
                <div>
                    {/* <h1>About of Us</h1> */}
                    <FounderBlog/>
                    <br></br>
                    <ActivityBlog/>
                    <br></br>
                    <Members />
                </div>
            </Styles>
            )
    }
   
}

export default AboutUs;