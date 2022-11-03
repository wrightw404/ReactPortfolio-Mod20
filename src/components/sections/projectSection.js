import React from 'react';
import voting from '../../assets/img/votingProject.jpeg';
import fuel from '../../assets/img/fuellogo.png';
import btat from '../../assets/img/beenthereatethat.png';
import style from '../../assets/img/styleSheet.jpg';


const ProjectSection = () => {
    return (
        <div id="test">
        <section class="section section-projects">
          <h2>Projects</h2>
            <div class="row">
                <div class="column">
                    
                    
                    <a href="/Users/WillWWright/Documents/Professional/module03.pdf" target="_blank"> <img class="popup" src={voting} alt="voter registration project"></img> </a>
                    <p class="summary">View my report on the accessibility of the Wisconsin voter registration site </p>
                        
                    
                    
                  <a href="/Users/WillWWright/Documents/Professional/FuelForACurePage.html/FuelForACure.html" target="_blank"> <img class="popup" src={fuel}alt="portfolio project"></img></a>
                    <p class="summary">View My Project For a Non-Profit Charity, Fueling For A Cure</p>
                    
                    
              </div>
                
                <div class="column">
                    
                    
                    <a href="https://beenthereatethat.herokuapp.com/"><img class="popup" src={btat}alt="Been There Ate That" rel="noreferrer" target="_blank"></img></a>
                        <p class="summary">Been There Ate That!
                        <a class="summary" href='https://github.com/ddangeles/BeenThere-AteThat'>GitHub Repository</a>
                        </p>
                    
                  <a href="https://msu.edu/~wrigh661/modules/module07/module7style-sheet.pdf" rel="noreferrer" target="_blank"><img class="popup" src={style} alt="portfolio project"></img></a>
                    <p class="summary">View the style sheet for this site</p>
                    
                    
                </div>	
          </div>
        </section>
        </div>
    )
}


export default ProjectSection;