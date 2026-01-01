import React from 'react'

const TabButton = ({active,selectTab, children}) => {
    const buttonClasses = active ? 'mr-3 font-semibold text-[#ECEFF4] border-b border-purple-500' : 'mr-3 font-semibold hover:text-[#ECEFF4] text-[#A0A0A0] ';
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-[#ECEFF4] ${buttonClasses}`}>
        {children}
        </p>
    </button>

)
}

export default TabButton