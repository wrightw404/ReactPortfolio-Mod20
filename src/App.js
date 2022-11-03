import ImageOne from "./components/parallaxImg/imageOne.js";
import ImageTwo from "./components/parallaxImg/imageTwo.js";
import AboutSection from "./components/sections/aboutSection.js";
import ResumeSection from "./components/sections/resumeSection.js";


function App() {
  return (
    <div>
     <ImageOne/>
     <AboutSection/>
     <ImageTwo/>
     <ResumeSection/>
     <ImageTwo/>
     <ImageOne/>
    </div>
  );
}

export default App;
 