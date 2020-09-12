import React from 'react';
import ContactInformation from '../../components/ContactInformation/ContactInformation';
import ContactTab from '../../components/ContactTab/ContactTab';
import styled from 'styled-components';


const Styles = styled.div`

.contact-sec2{
    padding-top: 40px;
    text-align:center;
}
.contact-sec2-h2{
    padding-bottom: 30px;
}

.contact-sec3{
    padding-top: 40px;
    padding-bottom: 10px;
}
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1500px !important;
    }
    
   }


`;

export default class Contact extends React.Component{
    render(){
        return(
            <Styles>
            <div>
               <div className="contact-sec3">
                    <div className="container">
                        <ContactTab/>
                    </div>
                </div>
                <div className="contact-sec2">
                    <h2 className="contact-sec2-h2">Contact Information</h2>
                      <ContactInformation/>
                </div>
               
                {/* <div className="contact-sec4">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.0891310344246!2d96.16938!3d16.7722406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed6d1bc16943%3A0x4a1098b6acd3183d!2sMyanmar%20Environmental%20Legal%20Services%20Limited!5e0!3m2!1sen!2smm!4v1599155767961!5m2!1sen!2smm" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div> */}
            </div>
            </Styles>  
        )
    }
}