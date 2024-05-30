import React from 'react'
import TopFooter from '../specific/Footer/TopFooter';
const Footer = () => {
    const dimension ="w-[100%] bg-[#e7b75f]";

  return (
    <footer className={`${dimension}`}>
      <TopFooter />
    </footer>
  )
}

export default Footer
