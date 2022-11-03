import Sunset from '../../assets/img/mainBackground.jpg'

import { Parallax } from 'react-parallax';

const ImageFive = () => (
    <Parallax className='image image-five' bgImage={ Sunset } bgImageAlt="la jolla cove" strength={800}>
       	<div className="ptext form-title">
		    <span className="border">
			    <div className="statement">
	                <p>Please reach out to me if you have any questions</p>
			    </div>
            </span>
        </div>
				
        <div className="contact-form">

			
		    <form id="contact-form" method="post" action="mailto:wrightw404@gmail.com" encType="text/plain">
			
			<input name="name" type="text" className="form-control" placeholder="Your Name" required></input>	
			
            <input name="email" type="email" className="form-control" placeholder="Your Email" required></input>
		
            <input name="message" className="form-control" placeholder="Message" rows="6" required></input>
		
			<input type="submit" className="form-control submit" value="SEND MESSAGE"></input>
			

            </form>
    
	    </div>
	
	        
        
    </Parallax>
);


export default ImageFive;