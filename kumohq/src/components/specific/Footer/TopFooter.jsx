import React from "react";

const TopFooter = () => {
  const dimension = "w-[100%]  py-[2.5rem] px-[2rem] border-b-[1px] border-b-[#241C154D] flex sm:justify-center justify-start ";
  const layout =
    "flex flex-wrap sm:flex-row flex-col sm:justify-center place-items-start gap-[1rem]";
  const text = "text-[16px] leading-[24px]";
  const options = "text-[13px] leading-[19.5px]";
  return (
    <div className={` ${dimension}`}>
        <div className={`${layout} w-[80%]  `}>
        <p className={`${text} `}> Related Links:</p>
      <p className={`${options} sm:mt-[0] mt-[10px]`}>
        <u>What is SEO?</u>
      </p>
      <p className={`${options}`}>
        <u>Make Money Online</u>
      </p>
      <p className={`${options}`}>
        <u>ChatGPT: What to Know About This AI Content Writing Tool</u>
      </p>
        </div>
      
    </div>
  );
};

export default TopFooter;
