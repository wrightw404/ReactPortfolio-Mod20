import ImageOne from "./components/parallaxImg/imageOne.js";
import ImageTwo from "./components/parallaxImg/imageTwo.js";
import ImageThree from "./components/parallaxImg/imageThree.js";
import ImageFour from "./components/parallaxImg/ImageFour.js";
import AboutSection from "./components/sections/aboutSection.js";
import ResumeSection from "./components/sections/resumeSection.js";
import ProjectSection from "./components/sections/projectSection.js";


function App() {
  return (
    <div>
     <ImageOne/>
     <AboutSection/>
     <ImageTwo/>
     <ResumeSection/>
     <ImageThree/>
     <ProjectSection/>
     <ImageFour/>
     <ImageOne/>
    </div>
  );
}

export default App;
 