import React from 'react';
//import voting from '../../assets/img/votingProject.jpeg';
import fuel from '../../assets/img/fuellogo.png';
import btat from '../../assets/img/beenthereatethat.png';
import style from '../../assets/img/styleSheet.jpg';
import noSQL from '../../assets/img/noSQL.png';


const ProjectSection = () => {
    return (
        <div id="test">
        <section class="section section-projects">
          <h2>Projects</h2>
            <div class="row">
                <div class="column">
                    
                    
                    <a href="https://drive.google.com/file/d/1zrHqnVYQwnl957N1oOgftZMymtRaFybG/preview" target="_blank" rel="noreferrer"> <img class="popup" src={noSQL} alt="voter registration project"></img> </a>
                    <p class="summary">Check out my social network web application
                    <a class="summary" href='https://github.com/wrightw404/socialNetwork-nosql'>GitHub Repository</a>
                    </p>
                        
                    
                    
                  <a href="https://www.fuelforacure.org/" target="_blank" rel="noreferrer"> <img class="popup" src={fuel}alt="portfolio project"></img></a>
                    <p class="summary">View My Project For a Non-Profit Charity, Fueling For A Cure</p>
                    
                    
              </div>
                
                <div class="column">
                    
                    
                    <a href="https://beenthereatethat.herokuapp.com/" target="_blank" rel="noreferrer"><img class="popup" src={btat}alt="Been There Ate That">
                        </img></a>
                        <p class="summary">Been There Ate That!
                        <a class="summary" href='https://github.com/ddangeles/BeenThere-AteThat'>GitHub Repository</a>
                        </p>
                    
                  <a href={style} rel="noreferrer" target="_blank"><img class="popup" src={style} alt="portfolio project"></img></a>
                    <p class="summary">View the style sheet for this site</p>
                    
                    
                </div>	
          </div>
        </section>
        </div>
    )
}


export default ProjectSection;