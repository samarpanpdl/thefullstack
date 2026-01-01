import React from 'react'

const ProjectTag = ({name,onClick, isSelected}) => {
    const buttonStyles= isSelected ? 'border-purple-500 text-[#ECEFF4]'
     : 'text-[#ECEFF4] border-slate-600 hover:border-black';
  return (
        <button className={`${buttonStyles} rounded-full text-[#ECEFF4] border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={()=>onClick(name)}
        >
            {name}
            </button>

  )
}

export default ProjectTag