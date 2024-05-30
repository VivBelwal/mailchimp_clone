import React, { useState } from 'react'

const MenuButton = () => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='flex flex-col gap-y-[6px] xl:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
    <div className='w-[30px] h-[2px] bg-[#000] dark:bg-[#fff] rounded-[4px]'></div>
    <div className='w-[30px] h-[2px] bg-[#000] dark:bg-[#fff] rounded-[4px]'></div>
    <div className='w-[30px] h-[2px] bg-[#000] dark:bg-[#fff] rounded-[4px]'></div>
  </div>
  )
}

export default MenuButton
