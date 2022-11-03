import ImageOne from "./components/parallaxImg/imageOne.js";
import ImageTwo from "./components/parallaxImg/imageTwo.js";
import ImageThree from "./components/parallaxImg/imageThree.js";
import ImageFour from "./components/parallaxImg/ImageFour.js";
import ImageFive from "./components/parallaxImg/ImageFive.js"
import AboutSection from "./components/sections/aboutSection.js";
import ResumeSection from "./components/sections/resumeSection.js";
import ProjectSection from "./components/sections/projectSection.js";
import ContactLinkSection from "./components/sections/contactLinkSection.js";


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
     <ContactLinkSection/>
     <ImageFive/>
    </div>
  );
}

export default App;
 