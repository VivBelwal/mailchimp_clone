import React from "react";
import integrations from "../../../utils/All_Integrations";
import arrow from "../../../assets/Images/arrow_icon.svg";
const Integrations = () => {
  const dimension = `w-[100%]  sm:py-[5rem] py-[2rem] text-[#241C15]`;

  const title =
    "font_family xl:text-[2.75vw] tracking-[-0.5px] xl:leading-[2.75vw]  pb-[16px] font-medium";
  const title_responsive =
    "lg:text-[3vw] lg:leading-[3vw] sm:text-[5vw] sm:leading-[5vw] text-[7.5vw] leading-[7.5vw]";

  const integration_title = "text-[16px] leading-[28px]";
  const integration_desc = "text-[13px] leading-[16.25px] text-[#241C15A6]";
  return (
    <section className={`${dimension}`}>
      <div className="w-[90%] m-auto">
        <h2
          className={`${title} ${title_responsive} sm:mb-[2rem] mb-[1rem] lg:w-[50%] sm:w-[80%] w-[90%]`}
        >
          Bring in more data, drive more growth with our integrations
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-0 gap-3 sm:pb-[2.5rem] pb-[1.5rem]">
          {integrations?.map((ele, index) => (
            <div
              className={`w-[100%] p-[24px] ${
                index === 8 ? "lg:flex hidden" : "flex"
              } gap-[15px] hover:bg-[#241c150d] bg-[#241c150d] sm:bg-[#fff] sm:flex-row flex-col sm:place-items-start place-items-center sm:text-start text-center`}
            >
              <div className="sm:w-[27%] w-[37%]">
                <img src={ele.icon} alt={ele.name} className="" />
              </div>

              <div className="sm:w-[67%] w-[90%]">
                <h3 className={` ${integration_title} mt-[10px] py-[4px]`}>
                  {ele.name}
                </h3>
                <p className={`sm:block hidden  ${integration_desc}`}>
                  {ele.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-[15px] justify-between items-center hover:bg-[#FFE01B] rounded-[25px]  group/shift w-fit">
          <p className="group-hover/shift:pl-[8px]">
            {" "}
            View all 300+ integrations
          </p>
          <div className="w-[32px] h-[32px] bg-[#FFE01B] p-[4px] rounded-[50%] flex justify-center items-center group-hover/shift:pr-[8px]">
            {/* <box-icon  name='right-arrow-alt'></box-icon> */}
            <img src={arrow} alt="arrow" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
