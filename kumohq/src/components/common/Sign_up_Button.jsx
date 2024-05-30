import React from "react";
import style from "../../styles/HoverAnimation.module.css";

const SignUpButton = () => {
  return (
    <div
      class={`text-[13px] rounded-[25px] px-[24px] py-[12px] bg-[#FFE01B] text-center leading-[19.5px] border-[1px] border-[#241C15] cursor-pointer ${style.hover_effect}`}
    >
      <a href="/">Sign Up</a>
    </div>
  );
};

export default SignUpButton;
