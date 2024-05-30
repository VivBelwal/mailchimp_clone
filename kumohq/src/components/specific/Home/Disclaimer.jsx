import React from "react";
import disclaimers from "../../../utils/Disclaimer";
const Disclaimer = () => {
  const dimension = "w-[100%] bg-[#F6F6F4] py-[2.5rem] text-[#241C15]";
  const title = "text-[11px] leading-[16px] font-500";
  const desc = "text-[11px] font-100";

  return (
    <section className={`${dimension}`}>
      <p className={`${title} font-bold w-[90%] m-auto`}> *Disclaimers </p>
      <ol className="m-auto w-[90%] list-decimal text-[11px]">
        {disclaimers?.map((ele, index) => (
          <li>
            <span className={`${title} font-bold`}> {ele.title} </span>
            <span className={`${desc} font-thin`}> {ele.descripton}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Disclaimer;
