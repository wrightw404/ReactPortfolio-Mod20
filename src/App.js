import ImageOne from "./components/parallaxImg/imageOne.js";
import ImageTwo from "./components/parallaxImg/imageTwo.js";
import ImageThree from "./components/parallaxImg/imageThree.js";
import ImageFour from "./components/parallaxImg/ImageFour.js";
import ImageFive from "./components/parallaxImg/ImageFive.js"
import NavBarSection from "./components/sections/navbarSection.js";
import AboutSection from "./components/sections/aboutSection.js";
import ResumeSection from "./components/sections/resumeSection.js";
import ProjectSection from "./components/sections/projectSection.js";
import ContactLinkSection from "./components/sections/contactLinkSection.js";
import FooterSection from "./components/sections/footerSection.js";


function App() {
  return (
    <div>
      <NavBarSection/>
     <ImageOne/>
     <AboutSection/>
     <ImageTwo/>
     <ResumeSection/>
     <ImageThree/>
     <ProjectSection/>
     <ImageFour/>
     <ContactLinkSection/>
     <ImageFive/>
     <FooterSection/>
    </div>
  );
}

export default App;
 