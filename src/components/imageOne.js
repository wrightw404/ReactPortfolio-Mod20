import Sunset from '../img/mainBackground.jpg'

import { Parallax } from 'react-parallax';

const ImageOne = () => (
    <Parallax bgImage={ Sunset } bgImageAlt="la jolla cove" strength={800}>
       <div className='content'>
            <span className='img-text'>Welcome Bill</span> 
       </div>
    </Parallax>
);


export default ImageOne;