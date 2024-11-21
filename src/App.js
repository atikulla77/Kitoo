import { useState } from "react";
import "./App.css";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navber from "./Components/Navber";
import bgvideo from "./image/video.mp4";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  // Show Pages
  const [showHome, setShowHome] = useState(true);

  // Go To Home Page Button
  const [goHomePageButton, setgoHomePageButton] = useState(false);

  const [showAbout, setShowAbout] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Animation
  const [pageAnimationTop, setpageAnimationTop] = useState(false);
  const [pageAnimationBottom, setpageAnimationBottom] = useState(false);
  // On Click To Show Top Animation To Go Others Page
  const pageAnimationTopBarTimeOut = () => {
    setpageAnimationTop(true);
    setTimeout(() => {
      setpageAnimationTop(false);
    }, 1500);
  };
  // On Click To Show Bottom Animation To Go Home Page
  const pageAnimationBottomBarTimeOut = () => {
    setpageAnimationBottom(true);
    setTimeout(() => {
      setpageAnimationBottom(false);
    }, 1500);
  };

  //  `````````````Go To About Page-----
  const GoAboutPage = () => {
    pageAnimationBottomBarTimeOut();
    setTimeout(() => {
      setShowAbout(true);
    }, 500);

    setTimeout(() => {
      setShowHome(false);
    }, 400);

    setTimeout(() => {
      setgoHomePageButton(true);
    }, 1900);
  };
  //  `````````````Go To Resume Page-----
  const GoResumePage = () => {
    pageAnimationBottomBarTimeOut();
    setTimeout(() => {
      setShowResume(true);
    }, 500);

    setTimeout(() => {
      setShowHome(false);
    }, 400);

    setTimeout(() => {
      setgoHomePageButton(true);
    }, 1900);
  };
  //  `````````````Go To Portfolio Page-----
  const GoPortfolioPage = () => {
    pageAnimationBottomBarTimeOut();
    setTimeout(() => {
      setShowPortfolio(true);
    }, 500);

    setTimeout(() => {
      setShowHome(false);
    }, 400);

    setTimeout(() => {
      setgoHomePageButton(true);
    }, 1900);
  };
  //  `````````````Go To Blog Page-----
  const GoBlogPage = () => {
    pageAnimationBottomBarTimeOut();
    setTimeout(() => {
      setShowBlog(true);
    }, 500);

    setTimeout(() => {
      setShowHome(false);
    }, 400);

    setTimeout(() => {
      setgoHomePageButton(true);
    }, 1900);
  };
  //  `````````````Go To Contact Page-----
  const GoContactPage = () => {
    pageAnimationBottomBarTimeOut();
    setTimeout(() => {
      setShowContact(true);
    }, 500);

    setTimeout(() => {
      setShowHome(false);
    }, 400);

    setTimeout(() => {
      setgoHomePageButton(true);
    }, 1900);
  };

  //  `````````````Back To Home Page-----
  const hideAboutpage = () => {
    pageAnimationTopBarTimeOut();
    setTimeout(() => {
      setShowAbout(false);
    }, 400);
    setShowHome(true);
  };
  const hideResumepage = () => {
    pageAnimationTopBarTimeOut();
    setTimeout(() => {
      setShowResume(false);
    }, 400);
    setShowHome(true);
  };
  const hidePortfoliopage = () => {
    pageAnimationTopBarTimeOut();
    setTimeout(() => {
      setShowPortfolio(false);
    }, 400);
    setShowHome(true);
  };
  const hideBlogpage = () => {
    pageAnimationTopBarTimeOut();
    setTimeout(() => {
      setShowBlog(false);
    }, 400);
    setShowHome(true);
  };
  const hideContactpage = () => {
    pageAnimationTopBarTimeOut();
    setTimeout(() => {
      setShowContact(false);
    }, 400);
    setShowHome(true);
  };

  // --------------- Home ---------------
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Freelancer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div className="w-full h-[100%] bg-[#101010] relative">
      {/* Home Page */}
      <div className={`w-full h-[100vh]  overflow-hidden relative`}>
        <Navber
          showHome={showHome}
          OnClickToGoHomePage={pageAnimationTopBarTimeOut}
          showAboutPage={GoAboutPage}
          showResumePage={GoResumePage}
          showPortfolioPage={GoPortfolioPage}
          showBlogPage={GoBlogPage}
          showContactPage={GoContactPage}
        />
        <video
          src={bgvideo}
          className={`w-full h-full mx-auto absolute top-0 left-0 right-0 z-0 object-cover ${
            showHome ? "" : "hidden"
          } `}
          autoPlay
          muted
          loop
        />
        <div
          className={`bg-[#00000091] w-full h-full absolute top-0 left-0 right-0 z-[2] ${
            showHome ? "" : "hidden"
          }`}
        ></div>
        {/* Top Animation To Go Others Page */}
        <div
          className={`bg-[#101010] w-full h-[100vh] absolute left-0 right-0 z-50 ${
            pageAnimationTop ? "siteMainAnimationTop" : "top-[100%] hidden"
          }`}
        ></div>
        {/* Bottom Animation To Go Home Page */}
        <div
          className={`bg-[#101010] w-full h-[100vh] absolute left-0 right-0 z-50 ${
            pageAnimationBottom
              ? "siteMainAnimationBottom"
              : "bottom-[100%] hidden"
          }`}
        ></div>

        {/* Home Page */}
        <div
          className={`w-[100%] h-full Poppins text-white ${
            showHome ? "flex" : "hidden"
          } flex-col justify-center items-center relative text-center pt-[35px] z-10`}
        >
          <h1 className="[@media(min-width:745px)]:text-[70px] [@media(min-width:585px)]:text-[60px] [@media(min-width:445px)]:text-[50px] [@media(min-width:400px)]:text-[40px] text-[30px] font-[700] mx-auto text-[#fff] [@media(min-width:745px)]:mb-[34px] [@media(min-width:585px)]:mb-[24px] [@media(min-width:445px)]:mb-[14px] mb-[8px]">
            Russell Davis
          </h1>
          <h1 className="[@media(min-width:745px)]:text-[32px] [@media(min-width:585px)]:text-[22px] [@media(min-width:445px)]:text-[16px] text-[14px] font-[400] mx-auto text-[#fff] [@media(min-width:445px)]:leading-[36px] leading-[25px]">
            i'm a
            <span className="text-[#fff] [@media(min-width:640px)]:pl-[10px] pl-[5px]">
              {text}
            </span>
            <span className="text-[#fff]">
              <Cursor cursorStyle="|" />
            </span>
          </h1>

          <div className="flex flex-col absolute [@media(min-width:435px)]:bottom-[2rem] bottom-[1rem] [@media(min-width:435px)]:left-[2rem] left-[1rem] ">
            <a href="#" className="">
              <FaFacebook className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
            </a>
            <a href="" className="mt-[15px]">
              <FaTwitter className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
            </a>
            <a href="" className="mt-[15px]">
              <FaInstagram className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
            </a>
            <a href="" className="mt-[15px]">
              <FaLinkedin className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
            </a>
          </div>
        </div>

        {/* About Page */}
        <div
          className={`w-full max-h-[100vh] h-[100vh] overflow-y-auto ${
            showAbout ? " bottom-[0%]" : "hidden"
          }  absolute left-0 right-0 z-40 bg-[#101010]`}
          id="About"
        >
          <About hideAboutpage={hideAboutpage} goHomePageButton={goHomePageButton} />
        </div>
        {/* Resume Page */}
        <div
          className={`w-full max-h-[100vh] h-[100vh] overflow-y-auto ${
            showResume ? " bottom-[0%]" : "hidden"
          }  absolute left-0 right-0 z-40 bg-[#101010]`}
          id="Resume"
        >
          <Resume hideResumepage={hideResumepage} goHomePageButton={goHomePageButton} />
        </div>
        {/* Portfolio Page */}
        <div
          className={`w-full max-h-[100vh] h-[100vh] overflow-y-auto ${
            showPortfolio ? " bottom-[0%]" : "hidden"
          }  absolute left-0 right-0 z-40 bg-[#101010] `}
          id="Portfolio"
        >
          <Portfolio hidePortfoliopage={hidePortfoliopage} goHomePageButton={goHomePageButton} />
        </div>
        {/* Blog Page */}
        <div
          className={`w-full max-h-[100vh] h-[100vh] overflow-y-auto ${
            showBlog ? " bottom-[0%]" : "hidden"
          }  absolute left-0 right-0 z-40 bg-[#101010]`}
          id="Blog"
        >
          <Blog hideBlogpage={hideBlogpage} goHomePageButton={goHomePageButton} />
        </div>
        {/* Contact Page */}
        <div
          className={`w-full max-h-[100vh] h-[100vh] overflow-y-auto ${
            showContact ? " bottom-[0%]" : "hidden"
          }  absolute left-0 right-0 z-40 bg-[#101010]`}
          id="Contact"
        >
          <Contact hideContactpage={hideContactpage} goHomePageButton={goHomePageButton} />
        </div>
      </div>
    </div>
  );
}

export default App;
