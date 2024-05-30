import React from 'react'
import FirstSection from '../specific/Navbar/FirstSection';
import SecondSection from '../specific/Navbar/SecondSection';

const Navbar = () => {
  return (
    <nav className='w-[100%] h-[68px] py-[12px] px-[16px] sticky top-[0px] flex xl:gap-[5%] gap-[0] z-[5] bg-[#fff]'>
<FirstSection />
<SecondSection />
      
    </nav>
  )
}

export default Navbar
