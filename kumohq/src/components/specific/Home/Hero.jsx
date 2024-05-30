import React from "react";
import SignUpButton from "../../common/Sign_up_Button";

const Hero = () => {
  const dimension = `w-[100%]  sm:pt-[7rem] pt-[5rem] sm:pb-[5rem] pb-[3rem]  `;
  const typography = `leading-[17.55px] text-[#241C15] text-center`;
  const layout = `flex flex-col justify-center items-center`;
  const header_responsive = `lg:text-[3.3vw] sm:text-[3.6vw] text-[6vw]`;
  return (
    <div class={`${dimension} ${typography} ${layout}`}>
      <div class={`${layout} lg:w-[50%] w-[90%]`}>
        <h1 class={`${header_responsive} tracking-[-1px]`}>
          Turn Emails into Revenue
        </h1>

        <p
          class={`mt-[30px] sm:text-[24px] text-[18px] leading-[32px] tracking-[-0.32px]`}
        >
          Win new customers with the #1 email marketing and automations
          platform* that recommends ways to get more opens, clicks, and sales.
        </p>

        <div class={`mt-[40px] text-[13px]`}>
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
