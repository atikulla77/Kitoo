import React from "react";

function Skill() {
  const skillDeta = [
    {
      id: 1,
      name: "HTML",
      progress: "100%",
    },
    {
      id: 2,
      name: "CSS",
      progress: "100%",
    },
    {
      id: 3,
      name: "Tailwind",
      progress: "95%",
    },
    {
      id: 4,
      name: "Boostrap",
      progress: "90%",
    },
    {
      id: 5,
      name: "JavaScript",
      progress: "90%",
    },
    {
      id: 6,
      name: "React JS",
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
      progress: "85%",
    },
  ];
  return (
    <div>
      <div
        className="w-full h-full relative desktop3:pt-[3.5rem] pt-[1rem] GeologicaFont "
        name="Skill"
      >
        <div className="w-full text-center text-white relative z-10 md:pb-[1rem] pb-[10px]">
          <h1 className="md:text-[30px] sm:text-[25px] text-[20px] font-bold">
            My Skills
          </h1>
          <p className="text-[#03bfff] sm:text-[14px] text-[13px] mx-auto">
            Here are the technologies i'm proficient in
          </p>
        </div>
        <div className="py-[10px] flex flex-wrap sm:w-[30rem] md:w-[47rem] lg:w-[60rem] mx-auto w-full justify-between items-center">
          {skillDeta.map((key) => {
            return (
              <div
                key={key.id}
                className="lg:w-[28rem] sm:w-[23rem] w-full mx-auto sm:!px-[10px] [@media(min-width:490px)]:px-[3rem] px-[1rem] [@media(min-width:450px)]:py-[15px] py-[10px]"
              >
                <p className="[@media(min-width:450px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] font-[500] [@media(min-width:450px)]:pb-[5px] pb-[3px]">
                  {key.name}
                </p>

                <div className="w-full bg-[#a6adbb33] rounded-full h-[7px] dark:bg-[#a6adbb33]">
                  <div
                    className={`bg-[#03bfff] h-[7px] rounded-full w-[${key.progress}]`}
                    style={{ width: `${key.progress}` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;
