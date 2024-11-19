import React from "react";

import blog from "../image/blog.jpg";

const Blog = (props) => {
  const blogPost = [
    {
      id: 1,
      image: blog,
      date: "18 Nov, 21",
      tittle: "How i became a Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
    },
    {
      id: 2,
      image: blog,
      date: "22 Oct, 20",
      tittle: "How i became a Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
    },
    {
      id: 3,
      image: blog,
      date: "25 Feb, 24",
      tittle: "How i became a Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
    },
    {
      id: 4,
      image: blog,
      date: "17 Jun, 23",
      tittle: "How i became a Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
    },
    {
      id: 5,
      image: blog,
      date: "12 Sep, 22",
      tittle: "How i became a Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
    },
    {
      id: 6,
      image: blog,
      date: "13 Aug, 21",
      tittle: "How i became a Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
    },
  ];

  return (
    <main className={`w-full h-full relative GeologicaFont`}>
      <p
        onClick={() => {
          props.hideBlogpage();
        }}
        className={`w-[25px] h-[25px]  ${
          props.goHomePageButton ? "flex" : "hidden"
        } [@media(min-width:555px)]:text-[35px] text-[30px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-20 rounded-[50%]`}
      >
        +
      </p>
      <div className="w-full pt-[2rem] [@media(min-width:420px)]:pb-[2rem] pb-[1rem]">
        <main className={`w-[100%] h-[100%] flex justify-center items-center`}>
          <div className="mx-auto xl:w-[1230px] w-[96%] relative z-[1] flex flex-col justify-center items-center py-[2.5rem]">
            <div className="w-full text-center text-white relative z-10 pb-[30px]">
              <h1 className="[@media(min-width:750px)]:text-[40px] [@media(min-width:420px)]:text-[30px] text-[25px] font-[700] [@media(min-width:750px)]:pb-[10px] pb-[5px] Poppins">
                My Blog
              </h1>
              <p className="text-[#9f9f9f] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] mx-auto">
                Check out my latest blog posts
              </p>
            </div>

            <div className="flex flex-wrap w-[100%] mx-auto">
              {blogPost.map((key) => {
                return (
                  <div
                  key={key.id}
                  className="[@media(min-width:420px)]:w-[370px] w-[300px] [@media(min-width:420px)]:my-[20px] my-[10px] mx-auto"
                  >
                    <div
                      className="[@media(min-width:420px)]:w-[350px] w-[300px] mx-auto overflow-hidden bg-[#141414] shadow-[0px_0px_3px_0px_#0000008c]"
                    >
                      <div className="w-[100%] [@media(min-width:420px)]:h-[13.5rem] h-[12.5rem] overflow-hidden relative">
                        <img src={key.image} className="w-[100%]" alt="" />

                        <div className="absolute bottom-0 right-0 text-center w-[85px] py-[5px] bg-[#141414] z-10">
                          <p className="text-[12px] font-[400] text-white">
                            {key.date}
                          </p>
                        </div>
                      </div>

                      <div className="text-left [@media(min-width:420px)]:px-[20px] px-[15px] [@media(min-width:420px)]:pt-[8px] pt-[5px] [@media(min-width:420px)]:pb-[20px] pb-[10px] text-white Poppins">
                        <h1 className="[@media(min-width:420px)]:text-[20px] text-[16px] [@media(min-width:420px)]:pt-[15px] pt-[8px] font-[600]">
                          {key.tittle}
                        </h1>
                        <p className={`[@media(min-width:420px)]:text-[0.9rem] text-[13px] my-[10px] text-[#9f9f9f]`}>
                          {key.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default Blog;
