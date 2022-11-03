import React from 'react';


const ProjectSection = () => {
    return (
        <div id="test">
        <section class="section section-projects">
          <h2>Projects</h2>
            <div class="row">
                <div class="column">
                    
                    
                    <a href="/Users/WillWWright/Documents/Professional/module03.pdf" target="_blank"> <img class="popup" src="./assets/photos/voting-copy.jpeg" alt="voter registration project"></img> </a>
                    <p class="summary">View my report on the accessibility of the Wisconsin voter registration site </p>
                        
                    
                    
                  <a href="/Users/WillWWright/Documents/Professional/FuelForACurePage.html/FuelForACure.html" target="_blank"> <img class="popup" src="./assets/photos/fuellogo-final-copy.png" alt="portfolio project"></img></a>
                    <p class="summary">View My Project For a Non-Profit Charity, Fueling For A Cure</p>
                    
                    
              </div>
                
                <div class="column">
                    
                    
                    <a href="https://beenthereatethat.herokuapp.com/"><img class="popup" src="./assets/photos/ucsdBootCamp-copy.png"alt="Been There Ate That"></img> alt="Been There Ate That"</a>
                        <p class="summary">UCSD Project</p>
                    
                  <a href="https://msu.edu/~wrigh661/modules/module07/module7style-sheet.pdf" rel="noreferrer" target="_blank"><img class="popup" src="./assets/photos/style-sheet-copy.jpg" alt="portfolio project"></img></a>
                    <p class="summary">View the style sheet for my site</p>
                    
                    
                </div>	
          </div>
        </section>
        </div>
    )
}


export default ProjectSection;