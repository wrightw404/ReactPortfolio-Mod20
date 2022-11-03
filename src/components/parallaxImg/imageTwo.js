import backDrop from '../../assets/img/cityimageblurry.jpeg'

import { Parallax } from 'react-parallax';

const ImageTwo = () => (
    <Parallax className='image image-two'  bgImage={ backDrop } bgImageAlt="blurry city" strength={800}>
       <div className="ptext">
			<span className="border">
				
				<p><i>"When creativity melds together with global issues, I believe you can bring the world together." </i></p>
				<p><i>- Virgil Abloh</i></p>
			</span>
		</div>
    </Parallax>
);


export default ImageTwo;