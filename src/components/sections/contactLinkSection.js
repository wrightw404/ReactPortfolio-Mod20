import React from 'react';
import github from '../../assets/img/GitHubLogo1.png';
import linkedin from '../../assets/img/linkedinlogo.png';

const ContactLinkSection = () => {
    return (
        <div id="contactme">
        <section class="section section-contact">
          
            
            <div class="in">
                <a href="https://www.linkedin.com/in/williamwallacewright/" target="_blank" rel="noreferrer">
                <img class="linked" src={linkedin} alt="linkedin logo"></img>
                </a>
                <p> Connect with me on Linkedin! </p>
            </div>
    
            <div class="git">
                <a href="https://github.com/wrightw404" target="_blank" rel="noreferrer">
                <img class="linked" src={github} alt="github logo"></img>
                </a>
                <p> Check out my GitHub! </p>
            </div>
          
        </section>
        </div>
    )
}


export default ContactLinkSection;