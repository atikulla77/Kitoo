import React from "react";
import { useState } from "react";

import item_1 from "../image/Portfolio/item_1.jpg";
import item_2 from "../image/Portfolio/item_2.jpg";
import item_3 from "../image/Portfolio/item_3.jpg";
import item_4 from "../image/Portfolio/item_4.jpg";
import item_5 from "../image/Portfolio/item_5.jpg";
import item_6 from "../image/Portfolio/item_6.jpg";

const Protfolio = (props) => {
  // OnClick to protfolio image
  const [showPopUpImg, setshowPopUpImg] = useState(false);
  const [popUpImg, setpopUpImg] = useState(item_1);

  const OnClickToShowAndSetPopUpImg = (x) => {
    setpopUpImg(x);
    setshowPopUpImg(true);
  };

  const BrandCatagoryCard = [
    {
      id: 1_1,
      img: item_1,
      catagoryName: "Coffee Cup Design",
    },
    {
      id: 1_2,
      img: item_2,
      catagoryName: "T-Shirt Design",
    },
  ];
  const DesignCatagoryCard = [
    {
      id: 2_1,
      img: item_3,
      catagoryName: "3D Bag Mockup",
    },
    {
      id: 2_2,
      img: item_4,
      catagoryName: "Label Tag Mockup",
    },
  ];
  const PhotosCatagoryCard = [
    { id: 3_1, img: item_5, catagoryName: "Packaging Box Mockup" },
    { id: 3_2, img: item_6, catagoryName: "Modern Bag Design" },
  ];
  const AllCatagoryCard = [
    ...BrandCatagoryCard,
    ...DesignCatagoryCard,
    ...PhotosCatagoryCard,
  ];

  const [Catagory, setCatagory] = useState(AllCatagoryCard);
  // ********************************************************
  const [onClickProjectLi1, setOnClickProjectLi1] = useState("true");
  const [onClickProjectLi2, setOnClickProjectLi2] = useState("false");
  const [onClickProjectLi3, setOnClickProjectLi3] = useState("false");
  const [onClickProjectLi4, setOnClickProjectLi4] = useState("false");

  const HandleProjectLi1 = () => {
    setOnClickProjectLi1("true");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("false");
    setCatagory(AllCatagoryCard);
  };
  const HandleProjectLi2 = () => {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("true");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("false");
    setCatagory(BrandCatagoryCard);
  };
  const HandleProjectLi3 = () => {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("true");
    setOnClickProjectLi4("false");
    setCatagory(DesignCatagoryCard);
  };
  const HandleProjectLi4 = () => {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("true");
    setCatagory(PhotosCatagoryCard);
  };

  // Protfolio Nav Item
  const PortfolioNavItem = [
    {
      id: 1,
      tittle: "Brand",
      dynamicClassName: onClickProjectLi2,
      onClick: HandleProjectLi2,
    },
    {
      id: 2,
      tittle: "Design",
      dynamicClassName: onClickProjectLi3,
      onClick: HandleProjectLi3,
    },
    {
      id: 3,
      tittle: "Photos",
      dynamicClassName: onClickProjectLi4,
      onClick: HandleProjectLi4,
    },
  ];

  return (
    <main
      className={`w-[100%] h-[100%] flex relative GeologicaFont bg-[#101010]`}
    >
      <div className="w-[100%] h-[100%] mx-auto flex flex-col Quicksand ">
        <p
          onClick={() => {
            props.hidePortfoliopage();
          }}
          className={`w-[25px] h-[25px]  ${
            props.goHomePageButton ? "flex" : "hidden"
          } [@media(min-width:555px)]:text-[35px] text-[30px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-20 rounded-[50%]`}
        >
          +
        </p>

        <div className="w-full text-center text-white relative z-10 sm2:pb-[25px] pb-[15px] pt-[3.5rem]">
          <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
            Projects
          </h1>
          <p className="text-[#03BFFF] [@media(min-width:450px)]:text-[13px] text-[12px] mx-auto pt-[5px]">
            Take A Look At Our Latest Portfolio
          </p>
        </div>

        <div className="flex items-center justify-center text-center w-[95%]  mx-auto protfolio-Scroll-bar ">
          <ul className="flex justify-between [@media(min-width:450px)]:w-[265px] w-[230px] pb-[10px] font-[400]">
            <li
              className={`pb-[3px] [@media(min-width:450px)]:w-[35px] w-[27px] sm2:text-[15px] [@media(min-width:450px)]:text-[14px] text-[13px] cursor-pointer ${
                onClickProjectLi1 === "true"
                  ? "text-[#03BFFF] border-b-[2px] border-b-[#03BFFF]"
                  : "text-[#fff] hover:text-[#03BFFF] border-b-[2px] border-b-[#101010] hover:border-b-[#03BFFF] transition-[0.1s]"
              }`}
              onClick={HandleProjectLi1}
            >
              All
            </li>

            {PortfolioNavItem.map((key) => {
              return (
                <li
                  key={key.id}
                  className={`pb-[3px] [@media(min-width:450px)]:w-[60px] w-[50px] sm2:text-[15px] [@media(min-width:450px)]:text-[14px] text-[13px] cursor-pointer ${
                    key.dynamicClassName === "true"
                      ? "text-[#03BFFF] border-b-[2px] border-b-[#03BFFF]"
                      : "text-[#fff] hover:text-[#03BFFF] border-b-[2px] border-b-[#101010] hover:border-b-[#03BFFF] transition-[0.1s]"
                  }`}
                  onClick={key.onClick}
                >
                  {key.tittle}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full [@media(min-width:450px)]:pt-[25px] pt-[10px] pb-[3rem] relative">
          {Catagory.map((catagory) => (
            <div key={catagory.id}>
              <label
                className={`[@media(min-width:450px)]:w-[380px] [@media(min-width:400px)]:w-[300px] w-[280px] h-[100%] overflow-hidden [@media(min-width:450px)]:mx-[15px] mx-0 my-[15px] relative flex justify-center items-center cursor-pointer shadow-[0px_0px_6px_0px_#0000000f]`}
              >
                <div
                  onClick={() => {
                    OnClickToShowAndSetPopUpImg(catagory.img);
                  }}
                  className={`w-[100%] h-[100%] overflow-hidden portfolioCard`}
                >
                  <img
                    src={catagory.img}
                    className="w-[100%] cursor-pointer"
                    alt=""
                  />
                  <div className="absolute top-0 left-0 right-0 w-full h-full bg-transparent hover:bg-[#000000d2] flex-col justify-center items-center transition-[0.5s] text-white portfolioCardImgInfo">
                    <p className="text-[15px] font-[400]">
                      {catagory.catagoryName}
                    </p>
                    <p className="text-[13px] font-[400] text-[#06f3f7] pt-[7px]">
                      More Info
                    </p>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Pop Up Img */}
      <div
        className={`w-[100%] h-[100vh] fixed top-0 left-0 right-0 ${
          showPopUpImg ? "flex" : "hidden"
        } justify-center items-center z-30 bg-[#000000d2]`}
      >
        <img
          src={popUpImg}
          className="[@media(min-width:800px)]:w-auto [@media(min-width:700px)]:w-[35rem] [@media(min-width:575px)]:w-[30rem] [@media(min-width:450px)]:w-[25rem] [@media(min-width:360px)]:w-[20rem] w-[19.5rem] [@media(min-width:800px)]:h-full h-auto mx-auto absolute right-0 left-0 py-[8px] z-[29]"
          data-aos="zoom-in"
        />

        <p
          onClick={() => {
            setshowPopUpImg(false);
          }}
          className={`[@media(min-width:555px)]:w-[35px] w-[25px] [@media(min-width:555px)]:h-[35px] h-[25px] flex [@media(min-width:555px)]:text-[45px] text-[35px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-[29] rounded-[50%]`}
        >
          +
        </p>

        <div
          onClick={() => {
            setshowPopUpImg(false);
          }}
          className="w-full h-full relative z-[28]"
        ></div>
      </div>
    </main>
  );
};

export default Protfolio;
