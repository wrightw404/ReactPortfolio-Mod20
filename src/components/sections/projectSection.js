import React from 'react';
//import voting from '../../assets/img/votingProject.jpeg';
import fuel from '../../assets/img/fuellogo.png';
import btat from '../../assets/img/beenthereatethat.png';
import style from '../../assets/img/styleSheet.jpg';
import noSQL from '../../assets/img/noSQL.png';


const ProjectSection = () => {
    return (
        <div id="test">
        <section className="section section-projects">
          <h2>Projects</h2>
            <div className="row">
                <div className="column">
                    
                    
                    <a href="https://drive.google.com/file/d/1zrHqnVYQwnl957N1oOgftZMymtRaFybG/preview" target="_blank" rel="noreferrer"> <img className="popup" src={noSQL} alt="voter registration project"></img> </a>
                    <p className="summary">Check out my social network web application
                    <a className="repo" href='https://github.com/wrightw404/socialNetwork-nosql'>GitHub Repository</a>
                    </p>
                        
                    
                    
                  <a href="https://www.fuelforacure.org/" target="_blank" rel="noreferrer"> <img className="popup" src={fuel}alt="portfolio project"></img></a>
                    <p className="summary">View My Project For a Non-Profit Charity, Fueling For A Cure</p>
                    
                    
              </div>
                
                <div className="column">
                    
                    
                    <a href="https://beenthereatethat.herokuapp.com/" target="_blank" rel="noreferrer"><img className="popup" src={btat}alt="Been There Ate That">
                        </img></a>
                        <p className="summary">Been There Ate That!
                        <a className="repo" href='https://github.com/ddangeles/BeenThere-AteThat'>GitHub Repository</a>
                        </p>
                    
                  <a href={style} rel="noreferrer" target="_blank"><img className="popup" src={style} alt="portfolio project"></img></a>
                    <p className="summary">View the style sheet for this site</p>
                    
                    
                </div>	
          </div>
        </section>
        </div>
    )
}


export default ProjectSection;