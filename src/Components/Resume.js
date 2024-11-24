import React from "react";

const Resume = (props) => {
  const EducationData = [
    [
      {
        id: 1,
        tittle: "Computer Science",
        date: "2004 - 2007",
        univercity: "Cambridge University",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
      {
        id: 2,
        tittle: "Bachelor Degree",
        date: "2008 - 2010",
        univercity: "University of Tokyo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
    ],
    [
      {
        id: 1,
        tittle: "Master Degree",
        date: "2012 - 2015",
        univercity: "Harvard University",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
    ],
  ];
  const ExperienceData = [
    [
      {
        id: 1,
        tittle: "Software Engineer",
        date: "2015 - 2017",
        univercity: "Adobe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
      {
        id: 2,
        tittle: "Back-End Developer",
        date: "2017 - 2018",
        univercity: "Google",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
    ],
    [
      {
        id: 1,
        tittle: "UI/UX Designer",
        date: "2019 - Present",
        univercity: "Discord",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
    ],
  ];

  return (
    <main className={`w-full h-full relative GeologicaFont`}>
      <p
        onClick={() => {
          props.hideResumepage();
        }}
        className={`w-[25px] h-[25px]  ${
          props.goHomePageButton ? "flex" : "hidden"
        } [@media(min-width:555px)]:text-[35px] text-[30px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-20 rounded-[50%]`}
      >
        +
      </p>
      {/* Resume Section */}
      <div className="w-full pt-[4.5rem] pb-[4rem] ">
        <div className="w-full text-center text-white relative z-10 pb-[30px]">
          <h1 className="[@media(min-width:750px)]:text-[40px] [@media(min-width:420px)]:text-[30px] text-[25px] font-[700] [@media(min-width:750px)]:pb-[10px] pb-[5px] Poppins">
            Resume
          </h1>
          <p className="text-[#06f3f7] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] mx-auto">
            Check out my Resume
          </p>
        </div>
        <div className="mx-auto xl:w-[1230px] w-[96%] relative z-[1] flex [@media(min-width:790px)]:flex-row flex-col justify-center items-center">
          {/* Education */}
          <div className="flex flex-col [@media(min-width:790px)]:w-[575px] [@media(min-width:430px)]:w-[90%] [@media(min-width:370px)]:w-[95%] w-[97%] xl:!mr-[20px] [@media(min-width:1000px)]:mr-[15px] [@media(min-width:920px)]:mr-[10px] mr-[5px] justify-center text-white z-10 relative overflow-hidden">
            <div className="w-[100%] flex justify-end">
              <h1 className="[@media(min-width:830px)]:text-[26px] [@media(min-width:475px)]:text-[23px] text-[20px] pb-[20px] w-[92%]">
                Education
              </h1>
            </div>
            {/* Border Left */}
            <div className="absolute top-[60px] left-[6px] bg-[#979797] [@media(min-width:370px)]:w-[2px] w-[1px] h-full z-[1]"></div>

            {EducationData[0].map((key) => {
              return (
                <div
                  key={key.id}
                  className="w-full [@media(min-width:920px)]:h-[165px] [@media(min-width:430px)]:h-[150px] [@media(min-width:370px)]:h-[135px] h-[125px] flex justify-end mb-[20px] relative EducationCardHoverEffect"
                >
                  {/* Border Left */}
                  <div className="absolute top-0 left-[1px] bg-[#06f3f7] [@media(min-width:370px)]:w-[12px] w-[10px] [@media(min-width:370px)]:h-[12px] h-[10px] rounded-[50%] z-[2] shadow-[0px_0px_0px_0px_#06f3f7] transition-[0.1s] EducationCardHoverEffectOnSideBar"></div>
                  {/* Content */}
                  <div className="[@media(min-width:370px)]:w-[92%] w-[93%] h-[100%] grid text-left items-center rounded-[10px] [@media(min-width:430px)]:px-[25px] [@media(min-width:370px)]:px-[20px] px-[15px] [@media(min-width:430px)]:py-[1.5rem] [@media(min-width:370px)]:py-[20px] py-[15px] bg-[#161616] mr-[3px] shadow-[0px_0px_3px_0px_#0000008c] transition-[0.1s] EducationCardHoverEffectOnMainContent">
                    <h2 className="[@media(min-width:920px)]:text-[20px] [@media(min-width:430px)]:text-[17px] text-[16px] font-[500]">
                      {key.tittle}
                    </h2>
                    <span className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] text-[13px] font-[400]">
                      {key.univercity} / {key.date}
                    </span>
                    <p className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] [@media(min-width:370px)]:text-[13px] text-[12px] font-[300]">
                      {key.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Last Education card */}
            {EducationData[1].map((key) => {
              return (
                <div
                  key={key.id}
                  className="w-full [@media(min-width:920px)]:h-[165px] [@media(min-width:430px)]:h-[150px] [@media(min-width:370px)]:h-[135px] h-[125px] flex justify-end relative LastEducationCardHoverEffect"
                >
                  {/* Border Left */}
                  <div className="absolute top-0 left-[1px] bg-[#06f3f7] [@media(min-width:370px)]:w-[12px] w-[10px] [@media(min-width:370px)]:h-[12px] h-[10px] rounded-[50%] z-[2] shadow-[0px_0px_0px_0px_#06f3f7] transition-[0.1s] LastEducationCardHoverEffectOnSideBar"></div>
                  {/* Content */}
                  <div className="[@media(min-width:370px)]:w-[92%] w-[93%] h-[100%] grid text-left items-center rounded-[10px] [@media(min-width:430px)]:px-[25px] [@media(min-width:370px)]:px-[20px] px-[15px] [@media(min-width:430px)]:py-[1.5rem] [@media(min-width:370px)]:py-[20px] py-[15px] bg-[#161616] shadow-[0px_0px_3px_0px_#0000008c] mr-[3px] transition-[0.1s] LastEducationCardHoverEffectOnMainContent">
                    <h2 className="[@media(min-width:920px)]:text-[20px] [@media(min-width:430px)]:text-[17px] text-[16px] font-[500]">
                      {key.tittle}
                    </h2>
                    <span className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] text-[13px] font-[400]">
                      {key.univercity} / {key.date}
                    </span>
                    <p className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] [@media(min-width:370px)]:text-[13px] text-[12px] font-[300]">
                      {key.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[15px] h-[100%] [@media(min-width:790px)]:flex hidden"></div>

          {/* Experience */}
          <div className="flex flex-col [@media(min-width:790px)]:w-[575px] [@media(min-width:430px)]:w-[90%] [@media(min-width:370px)]:w-[95%] w-[97%] xl:!mr-[20px] [@media(min-width:1000px)]:mr-[15px] [@media(min-width:920px)]:mr-[10px] mr-[5px] [@media(min-width:790px)]:mt-0 mt-[2.5rem] justify-center text-white z-10 relative overflow-hidden">
            <div className="w-[100%] flex justify-end">
              <h1 className="[@media(min-width:830px)]:text-[26px] [@media(min-width:475px)]:text-[23px] text-[20px] pb-[20px] w-[92%]">
                Experience
              </h1>
            </div>
            {/* Border Left */}
            <div className="absolute top-[60px] left-[6px] bg-[#979797] [@media(min-width:370px)]:w-[2px] w-[1px] h-full z-[1]"></div>

            {ExperienceData[0].map((key) => {
              return (
                <div
                  key={key.id}
                  className="w-full [@media(min-width:920px)]:h-[165px] [@media(min-width:430px)]:h-[150px] [@media(min-width:370px)]:h-[135px] h-[125px] flex justify-end mb-[20px] relative ExperienceCardHoverEffect"
                >
                  {/* Border Left */}
                  <div className="absolute top-0 left-[1px] bg-[#06f3f7] [@media(min-width:370px)]:w-[12px] w-[10px] [@media(min-width:370px)]:h-[12px] h-[10px] rounded-[50%] z-[2] shadow-[0px_0px_0px_0px_#06f3f7] transition-[0.1s] ExperienceCardHoverEffectOnSideBar"></div>
                  {/* Content */}
                  <div className="[@media(min-width:370px)]:w-[92%] w-[93%] h-[100%] grid text-left items-center rounded-[10px] [@media(min-width:430px)]:px-[25px] [@media(min-width:370px)]:px-[20px] px-[15px] [@media(min-width:430px)]:py-[1.5rem] [@media(min-width:370px)]:py-[20px] py-[15px] bg-[#161616] mr-[3px] shadow-[0px_0px_3px_0px_#0000008c] transition-[0.1s] ExperienceCardHoverEffectOnMainContent">
                    <h2 className="[@media(min-width:920px)]:text-[20px] [@media(min-width:430px)]:text-[17px] text-[16px] font-[500]">
                      {key.tittle}
                    </h2>
                    <span className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] text-[13px] font-[400]">
                      {key.univercity} / {key.date}
                    </span>
                    <p className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] [@media(min-width:370px)]:text-[13px] text-[12px] font-[300]">
                      {key.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Last Experience card */}
            {ExperienceData[1].map((key) => {
              return (
                <div
                  key={key.id}
                  className="w-full [@media(min-width:920px)]:h-[165px] [@media(min-width:430px)]:h-[150px] [@media(min-width:370px)]:h-[135px] h-[125px] flex justify-end relative LastExperienceCardHoverEffect"
                >
                  {/* Border Left */}
                  <div className="absolute top-0 left-[1px] bg-[#06f3f7] [@media(min-width:370px)]:w-[12px] w-[10px] [@media(min-width:370px)]:h-[12px] h-[10px] rounded-[50%] z-[2] shadow-[0px_0px_0px_0px_#06f3f7] transition-[0.1s] LastExperienceCardHoverEffectOnSideBar"></div>
                  {/* Content */}
                  <div className="[@media(min-width:370px)]:w-[92%] w-[93%] h-[100%] grid text-left items-center rounded-[10px] [@media(min-width:430px)]:px-[25px] [@media(min-width:370px)]:px-[20px] px-[15px] [@media(min-width:430px)]:py-[1.5rem] [@media(min-width:370px)]:py-[20px] py-[15px] bg-[#161616] shadow-[0px_0px_3px_0px_#0000008c] mr-[3px] transition-[0.1s] LastExperienceCardHoverEffectOnMainContent">
                    <h2 className="[@media(min-width:920px)]:text-[20px] [@media(min-width:430px)]:text-[17px] text-[16px] font-[500]">
                      {key.tittle}
                    </h2>
                    <span className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] text-[13px] font-[400]">
                      {key.univercity} / {key.date}
                    </span>
                    <p className="text-[#9f9f9f] [@media(min-width:430px)]:text-[14px] [@media(min-width:370px)]:text-[13px] text-[12px] font-[300]">
                      {key.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Skill Section */}
      <SkillSection />
    </main>
  );
};

const SkillSection = () => {
  const skillDeta = [
    {
      id: 1,
      name: "HTML/CSS",
      progress: "95%",
    },
    {
      id: 2,
      name: "Tailwind",
      progress: "90%",
    },
    {
      id: 3,
      name: "Boostrap",
      progress: "90%",
    },
    {
      id: 4,
      name: "JavaScript",
      progress: "90%",
    },
    {
      id: 5,
      name: "React JS",
      progress: "85%",
    },
    {
      id: 6,
      name: "TypeScript",
      progress: "85%",
    },
    {
      id: 7,
      name: "Node JS",
      progress: "80%",
    },
    {
      id: 8,
      name: "Github",
      progress: "80%",
    },
  ];
  return (
    <div className="w-full pb-[3rem] relative GeologicaFont ">
      <div className="w-full text-center text-white relative z-10 pb-[30px]">
          <h1 className="[@media(min-width:750px)]:text-[38px] [@media(min-width:420px)]:text-[28px] text-[23px] font-[700] [@media(min-width:750px)]:pb-[10px] pb-[5px] Poppins">
          My Skills
          </h1>
          <p className="text-[#06f3f7] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] mx-auto">
          My level of knowledge in some tools
          </p>
        </div>
      <div className="mx-auto xl:w-[1230px] w-[96%] relative z-[1] grid [@media(min-width:790px)]:grid-cols-2 grid-cols-1 [@media(min-width:1100px)]:px-[20px] px-0 justify-center items-center">
        {skillDeta.map((key) => {
          return (
            <div
              key={key.id}
              className="[@media(min-width:790px)]:w-[95%] [@media(min-width:465px)]:w-[28rem] w-[100%] mx-auto sm:!px-[10px] px-[1rem] [@media(min-width:450px)]:py-[15px] py-[10px]"
            >
              <div className="w-full relative [@media(min-width:450px)]:pb-[5px] pb-[3px]">
              <p className="[@media(min-width:450px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] font-[500] ">
                {key.name}
              </p>
              <p className={`absolute flex top-0 left-0 text-right [@media(min-width:450px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] justify-end`}
              style={{ width: `${key.progress}` }}>{key.progress}</p>
              </div>

              <div className="w-full bg-[#a6adbb33] [@media(min-width:450px)]:h-[7px] h-[6px] dark:bg-[#a6adbb33]">
                <div
                  className={`bg-[#06f3f7] h-[100%]  w-[${key.progress}]`}
                  style={{ width: `${key.progress}` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
