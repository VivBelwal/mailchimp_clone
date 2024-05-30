import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import arrow from "../../../assets/Images/arrow_icon.svg";
const BuilderAutomation = () => {
  const Builder_data = [
    {
      title: "Convert more customers at scale",
      desc: "Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.",
      button: true,
    },
    {
      title: "Discover new ways to automate",
      desc: "Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones.",
      button: true,
    },
    {
      title: "Keep your emails relevant and your brand growing",
      desc: "Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth.",
      button: false,
    },
  ];

  const title =
    "font_family xl:text-[2.75vw] tracking-[-0.5px] xl:leading-[2.75vw]  pb-[16px] font-medium";
  const title_responsive =
    "lg:text-[3vw] lg:leading-[3vw] sm:text-[5vw] sm:leading-[5vw] text-[7.5vw] leading-[7.5vw]";

  const h3 =
    "xl:text-[2.25vw] tracking-[-0.5px] xl:leading-[2.25vw]  lg:pb-[8px] pb-[20px] font-medium";
  const h3_responsive =
    "lg:text-[2.75vw] lg:leading-[2.75vw] sm:text-[4vw] sm:leading-[4vw] text-[6vw] leading-[4.5vw]";
  return (
    <section className="w-[100%] text-[#241C15]">
      <div className="py-[2.5rem] text-center font_family ">
        <h2
          className={`${title} ${title_responsive} lg:w-[60%] w-[90%] m-auto`}
        >
          Generate up to 7x more orders* with Customer Journey Builder
          automations
        </h2>
      </div>

      <div className="flex lg:flex-row flex-col items-start w-[100%]">
        <div className=" lg:w-[50%] w-[90%] m-auto bg-[#efeeea] lg:h-[700px] lg:sticky lg:top-[4.5rem] mt-[0]">
          <Player
            autoplay
            loop
            src="https://eep.io/assets/yzco4xsimv0y/54ucMd30prXyhzjGgQ9MsG/9f4c6596867d8ef4330aca05487ac2ad/HP_-_Scrolling_2_-_Lottie_1.json"
            className="lg:h-[700px] h-[300px] "
          ></Player>
        </div>
        <div className="flex flex-col lg:justify-center justify-start items-start lg:w-[50%] w-[90%]  lg:px-[100px] m-auto  relative">
          {Builder_data.map((ele) => (
            <div className="flex flex-col justify-center items-start w-[100%] lg:h-[500px] ">
              <h3 className={`${h3} ${h3_responsive}  mt-[20px] lg:mt-[0]`}>
                {ele.title}
              </h3>

              <p className="sm:text-[20px] text-[16px] leading-[28px]">
                {ele.desc}
              </p>

              {ele.button ? (
                <div className="flex flex-row gap-[15px] justify-between items-center hover:bg-[#FFE01B] rounded-[25px] mt-[2rem]  group/shift w-fit">
                  <p className="group-hover/shift:pl-[8px] text-[16px] leading-[32px] ">
                    {" "}
                    Learn more
                  </p>
                  <div className="w-[32px] h-[32px] bg-[#FFE01B] p-[4px] rounded-[50%] flex justify-center items-center group-hover/shift:pr-[8px]">
                    {/* <box-icon  name='right-arrow-alt'></box-icon> */}
                    <img src={arrow} alt="arrow" className="" />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuilderAutomation;
