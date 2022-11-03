import React from 'react';
import logo from '../../assets/img/favicon.png';

const FooterSection = () => {
    return (
        <footer id="foot">
        <div className="footer">
               
           <ul>
               <li><b>e-mail</b>: wrightw404@gmail.com</li>
               <li><b>phone</b>: (716) 504-7412</li>
             </ul>
           
           <img src={logo} alt="logo" class="logo2"></img>
           
       </div>
   </footer>
    )
}


export default FooterSection;