import React from "react";
import projectPic1 from "../image/portfolio/project_1.png";
import projectPic2 from "../image/portfolio/project_2.png";
import projectPic3 from "../image/portfolio/project_3.png";

import { FaArrowRight } from "react-icons/fa6";

function Portfolio() {
  const projectsData = [
    {
      id: 1,
      img: projectPic1,
      name: "PixPix",
      link: "https://pixpix.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "React Router" },
        { id: 7, name: "Node JS" },
      ],
    },
    {
      id: 2,
      img: projectPic2,
      name: "Badshah Agency",
      link: "https://badshah-agency.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "React Router" },
        { id: 7, name: "Node JS" },
      ],
    },
    {
      id: 3,
      img: projectPic3,
      name: "LeadBie",
      link: "https://leadbie.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "React Router" },
        { id: 7, name: "Node JS" },
      ],
    },
  ];
  return (
    <div>
      <div
        className="w-full h-full relative md:pt-[3.5rem] pt-[3rem] GeologicaFont "
        name="Portfolio"
      >
        <div className="w-full text-center text-white relative z-10 md:pb-[1rem] pb-[10px]">
          <h1 className="md:text-[30px] sm:text-[25px] text-[20px] font-bold">
            Portfolio
          </h1>
          <p className="text-[#03bfff] sm:text-[14px] text-[13px] mx-auto">
            Showcasing some of my recent work
          </p>
        </div>
        <div className="xl:!w-[1230px] [@media(min-width:430px)]:w-[96%] w-[100%] mx-auto [@media(min-width:430px)]:px-5 px-0 flex justify-center items-center">
          <div className="flex flex-wrap justify-around w-full h-full pt-[25px] relative">
            {projectsData.map((catagory) => (
              <div key={catagory.id} className="">
                <label
                  htmlFor={`my_modal_${catagory.id}`}
                  data-aos="fade-up"
                  className="[@media(min-width:430px)]:w-[365px] [@media(min-width:350px)]:w-[320px] w-[300px] [@media(min-width:430px)]:h-[205px] [@media(min-width:350px)]:h-[180px] h-[170px] rounded-[10px] bg-[#261856] overflow-hidden projectCardAnimation mb-[30px] relative flex justify-center items-center shadow-[0px_0px_6px_0px_#0000000f] mx-[10px]"
                >
                  <div className="w-[100%] h-[100%] rounded-[10px] overflow-hidden">
                    <img
                      src={catagory.img}
                      className="w-[100%] cursor-pointer"
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 [@media(min-width:430px)]:h-[60px] h-[40px] w-[100%] text-left flex justify-left items-end bg-gradient-to-t from-[#0a012a] text-white mb-[-3px]">
                    <p className="px-[25px] [@media(min-width:430px)]:text-[14px] [@media(min-width:350px)]:text-[13px] text-[12px] pl-[10px] pb-[8px]">
                      {catagory.name}
                    </p>
                  </div>
                  <a
                    href={catagory.link}
                    target="_blank"
                    className="absolute bottom-0 right-0 h-[30px] [@media(min-width:430px)]:w-[95px] w-[88px] [@media(min-width:430px)]:hover:w-[101px] hover:w-[95px] text-right flex justify-end items-end text-white hover:text-white mb-[-3px] cursor-pointer transition-[0.3s]"
                  >
                    <p className="[@media(min-width:430px)]:text-[13px] text-[12px] pr-[10px] pb-[8px] flex items-center justify-between w-full">
                      <span>Live Demo</span>
                      <FaArrowRight className="[@media(min-width:430px)]:text-[14px] [@media(min-width:350px)]:text-[13px] text-[12px]" />
                    </p>
                  </a>
                </label>
                <input
                  type="checkbox"
                  id={`my_modal_${catagory.id}`}
                  className="modal-toggle"
                />
                <div className="modal GeologicaFont" role="dialog">
                  <div className="modal-box [@media(min-width:640px)]:px-[1rem] px-[0px] [@media(min-width:640px)]:pt-[1rem] pt-[0px] [@media(min-width:640px)]:pb-[7px] pb-[3px] max-w-[55rem] bg-[#0a012a]">
                    <div className="w-[100%] h-[100%] [@media(min-width:475px)]:rounded-[10px] rounded-[5px] overflow-hidden">
                      <div className="w-full relative">
                        <img
                          src={catagory.img}
                          className="w-[100%] cursor-pointer [@media(min-width:475px)]:rounded-[10px] rounded-[5px]"
                          alt=""
                        />
                        <div className="absolute bottom-0 right-0 [@media(min-width:640px)]:h-[30px] h-[25px] [@media(min-width:360px)]:w-[100px] w-[90px] bg-[#0a012a] text-right flex justify-start items-end rounded-tl-[5px] [@media(min-width:460px)]:rounded-br-[8px] [@media(min-width:360px)]:rounded-br-[4px] rounded-br-[3px] pl-[10px] ">
                        <a
                          href={catagory.link}
                          target="_blank"
                          className="h-[100%] [@media(min-width:640px)]:w-[85px] [@media(min-width:475px)]:w-[80px] [@media(min-width:360px)]:w-[70px] w-[65px] [@media(min-width:640px)]:hover:w-[101px] [@media(min-width:475px)]:hover:w-[85px] [@media(min-width:360px)]:hover:w-[75px] hover:w-[70px] text-white hover:text-white cursor-pointer text-right flex justify-start items-center transition-[0.3s] "
                        >
                          <p className="[@media(min-width:640px)]:text-[13px] [@media(min-width:475px)]:text-[12px] [@media(min-width:360px)]:text-[11px] text-[10px] flex items-center justify-between w-full">
                            <span>Live Demo</span>{" "}
                            <FaArrowRight className="[@media(min-width:640px)]:text-[14px] [@media(min-width:475px)]:text-[13px] [@media(min-width:360px)]:text-[11px] text-[10px]" />
                          </p>
                        </a>
                        </div>
                      </div>
                      <div className="flex flex-wrap pt-[10px] [@media(min-width:640px)]:pl-0 pl-[5px]">
                        {catagory.language.map((key) => {
                          return (
                            <div
                              key={key.id}
                              className="[@media(min-width:640px)]:py-[4px] py-[2px] [@media(min-width:640px)]:px-[8px] px-[4px] [@media(min-width:640px)]:mr-[5px] mr-[3px] [@media(min-width:640px)]:mb-[8px] mb-[5px] text-[white] border-[1px] border-[#ffffff42] rounded-[7px]"
                            >
                              <p className="[@media(min-width:450px)]:text-[12px] [@media(min-width:400px)]:text-[10px] [@media(min-width:360px)]:text-[9px] text-[8px]">{key.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <label
                    className="modal-backdrop"
                    htmlFor={`my_modal_${catagory.id}`}
                  >
                    Close
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
