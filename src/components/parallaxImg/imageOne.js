import Sunset from '../../assets/img/mainBackground.jpg'

import { Parallax } from 'react-parallax';

const ImageOne = () => (
    <Parallax className='image' bgImage={ Sunset } bgImageAlt="la jolla cove" strength={800}>
       <div className='content'>
            <span className='img-text'><h1>William W. Wright</h1></span> 
            <h4>Experience Architect // Web Developer</h4>
       </div>
    </Parallax>
);


export default ImageOne;