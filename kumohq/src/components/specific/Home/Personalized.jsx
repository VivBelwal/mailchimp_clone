import React from "react";
import personalized from "../../../assets/Images/personalized.avif";
import "boxicons";
import arrow from "../../../assets/Images/arrow_icon.svg";
const Personalized = () => {
  const dimension = `lg:w-[90%] bg-[#f6f6f4] lg:bg-[#fff] lg:m-[auto] m-[.75rem] rounded-[8px] sm:py-[5rem] py-[2rem] `;
  const typography = `text-[#241C15] text-[16px] leading-[25.6px] `;
  const layout = `flex lg:flex-row flex-col gap-[2rem] place-items-center `;
  const title =
    "font_family xl:text-[2.75vw] tracking-[-0.5px] xl:leading-[2.75vw]  pb-[16px] font-medium";
  const title_responsive =
    "lg:text-[3vw] lg:leading-[3vw] sm:text-[5vw] sm:leading-[5vw] text-[7.5vw] leading-[7.5vw]  ";
  return (
    <section className={`${dimension} ${typography} ${layout}`}>
      <div
        className={`flex flex-col sm:gap-[1rem] gap-[0.5rem] lg:w-[50%] w-[85%] justify-center items-start `}
      >
        <h2 className={`${title} ${title_responsive} `}>
          Get started easily with a personalized product tour
        </h2>
        <p>
          An onboarding specialist is here to help you get started with
          confidence—it’s included with Standard and Premium plans.*
        </p>
        <div className="flex flex-row gap-[15px] justify-between items-center hover:bg-[#FFE01B] rounded-[25px]  group/shift">
          <p className="group-hover/shift:pl-[8px]">
            {" "}
            Learn more about onboarding
          </p>
          <div className="w-[32px] h-[32px] bg-[#FFE01B] p-[4px] rounded-[50%] flex justify-center items-center group-hover/shift:pr-[8px]">
            {/* <box-icon  name='right-arrow-alt'></box-icon> */}
            <img src={arrow} alt="arrow" className="" />
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] w-[100%] m-auto flex justify-center items-center">
        <img src={personalized} alt="personalized" />
      </div>
    </section>
  );
};

export default Personalized;
