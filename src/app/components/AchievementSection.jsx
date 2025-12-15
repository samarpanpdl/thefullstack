import React from 'react'
const achievementlist = [
    {
        metric: "Projects",
        value: "2",
    },
    {
        metric: "Users",
        value: "2",
    },
    {
        metric: "Awards",
        value: "2",
    },
    {
        metric: "Years",
        value: "2+",
    },
    

]
const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 sm:px-0 xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 lg:px-17 sm:px-4 md:px-8 flex flex-row items-center justify-between'>
        {
            achievementlist.map((achievement,index)=>(
                <div key={index} className='flex flex-col justify-center items-center md:mx-4 sm:mx-0 sm:px-0'>
                    <h3 className='lg:text-4xl sm:text-sm font-bold text-white sm:mx-0 sm:px-0'>{achievement.value}+</h3> 
                    <p className='text-[#ADB7BE] text-base sm:mx-0 sm:px-0'>{achievement.metric}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default AchievementSection