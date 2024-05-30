import React from "react";
import features_data from "../../../utils/features_data";
const Features = () => {
  const layout = "grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-1";
  const title =
    "font-500 text-[24px] w-[80%]  absolute top-[35px] left-[50%] translate-x-[-50%]";
  const description = "text-[16px] leading-[28px]";

  return (
    <div class={`${layout} text-[#241C15]`}>
      {features_data?.map((ele, index) => (
        <div className={`${ele.bg} relative group/feature `}>
          <a href="">
            <figure className="overflow-hidden">
              <h2
                className={`${title} font_family z-[1] group-hover/feature:underline`}
              >
                {ele.title}
              </h2>
              <img
                src={ele.image}
                alt={ele.title}
                className="group-hover/feature:scale-[1.1]"
              />
            </figure>
          </a>
          <div className="p-[16px] flex flex-col justify-between h-[211.5px] gap-[15px]">
            <p className={`${description} w-[90%]`}>{ele.description}</p>
            <a href="">
              <button className="text-[13px] rounded-[25px] px-[24px] py-[12px]  text-center leading-[19.5px] border-[1px] border-[#241C15]">
                {ele.button_text}
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
