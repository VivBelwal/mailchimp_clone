import React from 'react'
import style from "../../styles/HoverAnimation.module.css";
const LoginButton = () => {
  return (
    <div class={`text-[13px] rounded-[25px] px-[24px] py-[12px]  text-center leading-[19.5px] border-[1px] border-[#241C15] cursor-pointer ${style.hover_effect} `}>
    <a href="/">Log In</a>
  </div>
  )
}

export default LoginButton
