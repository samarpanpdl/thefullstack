"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementList = [
  { metric: "Projects", value: "10", postfix: "+" },
  { metric: "Users", value: "100", postfix: "+" },
  { metric: "Awards", value: "2", postfix: "+" },
  { metric: "Years", value: "5", postfix: "+" },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="bg-[#16181A] border border-[#33353F] rounded-2xl py-8 px-4 flex flex-col sm:flex-row items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,1)]">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {/* Prefix could be added here if needed */}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  className="text-white text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 1,
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base font-medium">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;