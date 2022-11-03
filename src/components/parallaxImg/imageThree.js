import backDrop from '../../assets/img/cityimageblurry.jpeg'

import { Parallax } from 'react-parallax';

const ImageThree = () => (
    <Parallax className='image image-three'  bgImage={ backDrop } bgImageAlt="blurry city" strength={800}>
       <div className="ptext">
			<span className="border">
				
				<p><i>"Plan your work and work your plan"</i></p>
				<p><i>- Marv Levy</i></p>
			</span>
		</div>
    </Parallax>
);


export default ImageThree;