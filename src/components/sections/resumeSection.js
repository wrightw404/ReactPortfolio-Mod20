import React from 'react';
import headshot from '../../assets/img/newheadshot.jpeg';
//import Resume from '../../assets/forms/updatedResume.pdf;'

const ResumeSection = () => {
    return (
        <div id="go">
        <section class="section section-resume">
        <h2>My Resume</h2>
              {/* <h5><a href= { Resume } download='updatedResume.pdf'>Link to PDF Version of Resume</a></h5> */}
              <h5><a href="https://github.com/wrightw404">Link to my GitHub</a></h5>
          <div class="resume">
              <div class="propic">
                  <img src={headshot} alt="headshot"/>
            </div>
              <h3>Education</h3>
                      <h4>Michigan State University</h4>	
                          <ul>
                              <li>Experience Architecture</li>
                          </ul>
                      <h4>UC San Diego Web Development Bootcamp</h4>
                      <h4>University of Detroit Jesuit High School and Academy</h4>
                  
          
              <h3>Work Experience</h3>
              <h4>WaterGrill San Diego</h4>
                  <ul>
                      <li>Work as a Sushi Chef in a fast paced environment</li>
                      <li>Set up station pre-service and made sure we had adequate supplies for service</li>
                      <li>Cleaned up stations post-service, including packing and labeling</li>
                      <li>Communicated with prep kitchen and main kitchen for future service needs</li>
                  </ul>
                <h4>Nobu Chicago</h4>
                  <ul>
                      <li>Worked under Executive Chef Sean Tan to make sure Nobu Chicago would exceed expectations during its opening in October, 2020</li>
                      <li>Mainly grill/saute but would work any station that needed a hand</li>
                      <li>Set up station pre-service and made sure we had adequate supplies for service</li>
                      <li>Cleaned up stations post-service, including packing and labeling</li>
                      <li>Communicated with prep kitchen for future service needs</li>
                      <li>Made sure walk-in fridges were clean and appropriately labled</li>
                  </ul>
              <h4>Digital Intern at the Sydney Children's Hospitals Foundation</h4>
                  <ul>
                      <li>Responsible for coordinating the redevelopment of the Foundation's website to facilitate the recent expansion of entities to include The Children's Hospital Westmead, Bear Cottage, NETS and Kids Research in conjunction with a Digital Producer</li>
                  </ul>
              <h4>Barrick Enterprises</h4>
                  <ul>
                      <li>Analyzed photos of the damage done to stations</li>
                      <li>Organized the printed photos into an efficient system that could easily be accessed on the site</li>
                      <li>Improved the physical aesthetic of the station</li>
                      <li>Accommodated with the managers of the stations to make sure my work would not interfere with the day to day business</li>
                      <li>Compiled the new phots of the clean station in a document and sent it to my supervisor</li>
                  </ul>
              <h3>Extracurricular</h3>
              <h4>Programming Skills</h4>
                  <ul>
                      <li>HTML, CSS, Javascript, Ruby, C#, Java, MongoDB, mySQL, noSQL, React.js</li>
                  </ul>
              <h4>Experience Architecture (XA) Club</h4>
                  <ul>
                      <li>Redesigned the College of Arts and Letter XA page. This project will primarily have to do with designing the layout so that it is usable and accessible.</li>
                      <li>Working with the Mayor of Lansing to conduct user testing on a site that is planning to be launched. Will come up with solutions to problems encountered during user testing.</li>
                  </ul>
                <h4>San Diego Hiking Club</h4>
                <h4>Men's Lacrosse League</h4>
            </div>
          </section>
          
          </div>
    )
}


export default ResumeSection;