import React from "react";

const DiscountBanner = () => {
  const dimension = `w-[100%]  py-[12px] bg-[#241c15] text-center`;
  const typography = `text-[13px] leading-[17.55px] text-[#fff]`;
  const layout = `flex flex-col justify-center items-center  `;
  const get_started = 'border-b-[1px] border-dashed'
  return (
    <aside className={`${dimension} ${typography} ${layout}`}>
      <span>
        <p>Save 50% for 12 months</p>
         - limited time offer.{" "}
        <a href="/" className={`${get_started}`}>
          Get started today
        </a>
      </span>
    </aside>
  );
};

export default DiscountBanner;
