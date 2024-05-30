import React from "react";
import bestData from "../../../utils/best_data";

const BestInClass = () => {
  const layout = "";
  const dimensions = "w-[100%] bg-[#241c15] md:py-[5rem] py-[3rem] ";
  const typography =
    "text-[#fff] text-[24px] leading-[32px] tracking-[-0.32px]";
  const title =
    "font_family xl:text-[2.75vw] tracking-[-0.5px] xl:leading-[2.75vw]  pb-[16px]";
  const title_responsive =
    "lg:text-[3vw] lg:leading-[3vw] sm:text-[5vw] sm:leading-[5vw] text-[7.5vw] leading-[7.5vw]  ";

  return (
    <section className={`${dimensions} ${typography} `}>
      <div className="m-auto md:p-[4rem] p-[2rem] w-[90%] flex justify-between lg:flex-row flex-col">
        <div className="lg:w-[30%] w-[100%] lg:pb-[0] md:pb-[4rem] pb-[40px]">
          <h1 className={`${title} ${title_responsive} `}>
            Find out why we’re best-in-class
          </h1>
          <p className="">
            The #1 email marketing and automations platform* that recommends
            ways to get more opens, clicks, and sales.
          </p>
        </div>

        <div className="lg:w-[60%] w-[100%] md:grid flex md:grid-cols-2 flex-col md:justify-start justify-center items-center gap-x-[4.5rem] md:gap-y-[6.5rem] gap-y-[2rem]">
          {bestData?.map((ele, index) => (
            <div className="">
              <h3 className="font-medium md:text-[24px] text-[18px]">
                {ele.best_title}
              </h3>
              <p className="text-[16px] leading-[24px]">{ele.best_desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestInClass;
