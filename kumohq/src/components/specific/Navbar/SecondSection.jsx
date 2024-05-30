import React from 'react'
import 'boxicons'
import SignUpButton from '../../common/Sign_up_Button';
import LoginButton from '../../common/LoginButton';
import MenuButton from './MenuButton';

const SecondSection = () => {
    const elements = "flex justify-between items-center p-[8px] text-[13px] leading-[14.3px] gap-[5px] hover:bg-blue-100 rounded-[10px] cursor-pointer";
   const display = "xl:flex hidden";
   
    
  return (
    <section className='w-[50%] flex xl:justify-between justify-end gap-[1rem]  items-center'>

        <div className={`${elements} ${display}`}>
            <box-icon name='search'></box-icon>
        </div>
        <div className={`${elements} ${display}`}>
            <p>EN</p>
            <box-icon name='chevron-down' ></box-icon>
        </div>
        <div className={`${elements} ${display}`}>
        <p>Sales: +1 (800) 315-5939</p>
            
        </div>
        <div className={`${elements} xl:hidden block`}>
        <p>Pricing</p>
            
        </div>
        <div className='sm:block hidden'>
        <LoginButton  className="text-[13px] " />
        </div>
        <div className={`${display}`}>
        <SignUpButton className={`text-[13px]`}  />
            
        </div>

        <MenuButton className="block xl:flex"/>
      
    </section>
  )
}

export default SecondSection
