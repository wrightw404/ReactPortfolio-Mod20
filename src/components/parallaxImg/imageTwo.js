import backDrop from '../../assets/img/cityimageblurry.jpeg'

import { Parallax } from 'react-parallax';

const ImageTwo = () => (
    <Parallax className='image'  bgImage={ backDrop } bgImageAlt="la jolla cove" strength={800}>
       <div className='content'>
            <span className='img-text'><h1>William W. Wright</h1></span> 
            <h4>Experience Architect // Web Developer</h4>
       </div>
    </Parallax>
);


export default ImageTwo;