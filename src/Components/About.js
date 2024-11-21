import React from "react";

import web_kit_mask_main_image from "../image/about/web_kit_mask_main_image.png";
import image from "../image/about/image.jpg";
import raward from "../image/about/raward.png";

const About = (props) => {
  return (
    <main className={`w-full h-full relative GeologicaFont`}>
      <p
        onClick={() => {
          props.hideAboutpage();
        }}
        className={`w-[25px] h-[25px]  ${
          props.goHomePageButton ? "flex" : "hidden"
        } [@media(min-width:555px)]:text-[35px] text-[30px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-20 rounded-[50%]`}
      >
        +
      </p>
      <div className="w-full pt-[4.5rem] pb-[3rem] ">
        <div className="w-full text-center text-white relative z-10 desktop3:pb-[45px] pb-[25px]">
          <p className="text-[#06f3f7] sm2:text-[15px] sm4:text-[13px] text-[12px] sm4:w-[385px] w-[285px] mx-auto sm4:leading-[20px] leading-[16px]">
            About Me
          </p>
          <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold ">
            A Passionate Expart
          </h1>
        </div>
        <div className="mx-auto xl:w-[1230px] w-[96%] relative z-[1] flex justify-center items-center">
          <div className="flex desktop3:flex-row flex-wrap w-full lg:justify-around desktop3:justify-between justify-center text-black z-10">
            <div className="stext1:w-[615px] lg:w-[500px] sm5:w-[450px] sm4:w-[370px] sm3:w-[330px] w-[300px] stext1:h-[600px] lg:h-[550px] sm5:h-[480px] sm4:h-[400px] sm3:h-[375px] h-[360px] flex justify-center relative">
              <div
                className={`absolute top-0 right-0 stext1:w-[350px] lg:w-[300px] sm5:w-[250px] sm4:w-[220px] sm3:w-[200px] w-[190px] stext1:h-[480px] lg:h-[430px] sm5:h-[370px] sm4:h-[320px] sm3:h-[295px] h-[285px] overflow-hidden flex justify-center items-center sm5:rounded-[15px] rounded-[10px]`}
              >
                <img
                  src={image}
                  className={` w-[100%]`}
                  style={{ transition: "1s" }}
                  alt=""
                />
              </div>
              <div
                className={`absolute stext1:top-[23%] sm5:top-[34%] sm4:top-[40.1%] sm3:top-[42.1%] top-[43.5%] stext1:left-[16%] lg:left-[15%] sm5:left-[20%] sm4:left-[16%] sm3:left-[15%] left-[12%] stext1:w-[130px] lg:w-[110px] sm5:w-[90px] sm4:w-[75px] sm3:w-[70px] w-[65px] stext1:h-[130px] lg:h-[110px] sm5:h-[90px] sm4:h-[75px] sm3:h-[70px] h-[65px] overflow-hidden flex justify-center items-center sm5:rounded-[15px] rounded-[10px]`}
              >
                <img
                  src={raward}
                  className={`w-[100%]`}
                  style={{ transition: "1s" }}
                  alt=""
                />
              </div>
              <div
                className={`absolute bottom-0 left-0 stext1:w-[350px] lg:w-[280px] sm5:w-[250px] sm4:w-[200px] sm3:w-[190px] w-[170px] stext1:h-[300px] lg:h-[240px] sm5:h-[210px] sm4:h-[150px] sm3:h-[137px] h-[130px] z-[1] sm5:rounded-[15px] rounded-[10px] overflow-hidden`}
              >
                <img
                  src={web_kit_mask_main_image}
                  className={`w-[100%]`}
                  style={{ transition: "1s" }}
                  alt=""
                />
              </div>
              <div
                className={`absolute lg:bottom-[8px] sm5:bottom-[11px] bottom-[8px] right-[0px] stext1:w-[250px] lg:w-[205px] sm5:w-[190px] sm4:w-[160px] sm3:w-[130px] w-[124px] lg:h-[100px] sm5:h-[85px] sm3:h-[62px] h-[60px] z-[1] overflow-hidden flex items-center`}
              >
                <div className="h-full lg:w-[8px] sm4:w-[5px] w-[4px] bg-[#06f3f7]"></div>
                <div className="flex items-center text-white sm4:pl-[17px] pl-[7px]">
                  <h1 className="lg:text-[55px] sm5:text-[50px] text-[40px] sm5:font-bold font-semibold">
                    3
                  </h1>
                  <h1 className="sm4:pl-[10px] pl-[5px] lg:text-[20px] sm5:text-[18px] sm4:text-[15px] sm3:text-[14px] text-[13px] sm3:font-bold font-semibold lg:leading-[25px] sm5:leading-[21px] sm3:leading-[18px] leading-[17px]">
                    Successful <br />
                    Years
                  </h1>
                </div>
              </div>
            </div>
            <div className="desktop4:w-[465px] desktop3:w-[415px] sm2:w-[530px] w-[98%] text-white desktop3:text-left text-center desktop3:mt-[0px] mt-[40px] relative">
              <p className="text-[20px] font-bold z-10 relative">My Bio</p>
              <p className="sm2:text-[15px] sm5:text-[14px] text-[13px] sm2:font-extralight font-thin text-[#ffffffab] sm4:pt-[13px] pt-[5px] sm2:tracking-[0.3px] tracking-[0.2px] sm2:leading-[21px] leading-[18px] z-10 relative">
                <span className="  ">
                  Hi! I'm Atikulla, a passionate web developer with a deep love
                  for coding. I specialize in creating dynamic, user-friendly
                  websites and applications that not only look great but also
                  perform seamlessly. With a strong foundation in web
                  technologies and an eye for detail, I’m always eager to tackle
                  new challenges and bring innovative ideas to life. Whether
                  it’s front-end design or back-end development, I enjoy the
                  process of turning complex problems into simple, functional
                  solutions.
                </span>
                <br />
                <span className="  ">
                  Always available for freelance work if the right project
                  <br className="sm5:flex hidden" /> comes along, Feel free to
                  contact me!
                </span>
              </p>
              <div className="border-[2px] border-[#ffffff42] w-full desktop4:h-[205px] desktop3:h-[200px] sm5:h-[205px] sm3:h-[200px] h-[392px] rounded-[15px] sm3:flex block mt-[20px] mb-[22px] sm3:pt-0 pt-[20px] z-10 relative">
                <div className="sm3:w-[50%] w-[100%] sm3:h-full h-[180px] sm3:border-r-[1px] border-[0px] border-r-[#ffffff42] desktop4:pl-[30px] desktop3:pl-[20px] sm5:pl-[30px] sm3:pl-[18px] pl-[20px] desktop4:py-[20px] sm5:py-[10px] sm3:py-[10px] py-0 flex flex-wrap items-center text-left justify-start">
                  <div className="w-full h-[50px]">
                    <p className="sm4:text-[15px] text-[14px] font-[400]">
                      Name
                    </p>
                    <p className="sm4:text-[14px] text-[13px] font-extralight text-[#ffffffab]">
                      Md Atikulla
                    </p>
                  </div>
                  <div className="w-full h-[50px]">
                    <p className="sm4:text-[15px] text-[14px] font-[400]">
                      Email
                    </p>
                    <p className="sm4:text-[14px] text-[13px] font-extralight text-[#ffffffab]">
                      kodify345@gmail.com
                    </p>
                  </div>
                  <div className="w-full h-[50px]">
                    <p className="sm4:text-[15px] text-[14px] font-[400]">
                      Phone
                    </p>
                    <p className="sm4:text-[14px] text-[13px] font-extralight text-[#ffffffab]">
                      +880 173 966 3503
                    </p>
                  </div>
                </div>
                <div className="sm3:w-[50%] w-[100%] sm3:h-full h-[180px] sm3:border-l-[1px] border-[0px] border-l-[#ffffff42] desktop4:pl-[30px] desktop3:pl-[20px] sm5:pl-[30px] sm3:pl-[18px] pl-[20px] desktop4:py-[25px] sm5:py-[15px] sm3:py-[10px] py-0 flex flex-wrap items-center text-left justify-start">
                  <div className="w-full h-[50px]">
                    <p className="sm4:text-[15px] text-[14px] font-[400]">
                      Address
                    </p>
                    <p className="sm4:text-[14px] text-[13px] font-extralight text-[#ffffffab]">
                      Rajshahi, Paba 6210
                    </p>
                  </div>
                  <div className="w-full h-[50px]">
                    <p className="sm4:text-[15px] text-[14px] font-[400]">
                      DOB
                    </p>
                    <p className="sm4:text-[14px] text-[13px] font-extralight text-[#ffffffab]">
                      June 21, 2000
                    </p>
                  </div>
                  <div className="w-full h-[50px]">
                    <p className="sm4:text-[15px] text-[14px] font-[400]">
                      Freelance
                    </p>
                    <p className="sm4:text-[14px] text-[13px] font-extralight text-[#ffffffab]">
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
