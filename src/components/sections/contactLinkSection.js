import React from 'react';
import github from '../../assets/img/GitHubLogo.png';
import linkedin from '../../assets/img/linkedinLogo.png';

const ContactLinkSection = () => {
    return (
        <div id="contactme">
        <section className="section section-contact">
          
            
            <div className="in">
                <a href="https://www.linkedin.com/in/williamwallacewright/" target="_blank" rel="noreferrer">
                <img className="linked" src={linkedin} alt="linkedin logo"></img>
                </a>
                <p> Connect with me on Linkedin! </p>
            </div>
    
            <div className="git">
                <a href="https://github.com/wrightw404" target="_blank" rel="noreferrer">
                <img className="linked" src={github} alt="github logo"></img>
                </a>
                <p> Check out my GitHub! </p>
            </div>
          
        </section>
        </div>
    )
}


export default ContactLinkSection;