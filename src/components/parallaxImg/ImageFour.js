import backDrop from '../../assets/img/cityimageblurry.jpeg'

import { Parallax } from 'react-parallax';

const ImageFour = () => (
    <Parallax className='image image-four'  bgImage={ backDrop } bgImageAlt="blurry city" strength={800}>
       <div className="ptext">
			<span className="border">
				
				<p><i>"Simplicity is the soul of efficiency." - Austin Freeman</i></p>
			</span>
		</div>
    </Parallax>
);


export default ImageFour;