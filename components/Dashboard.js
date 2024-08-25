"use client";
import { Fugaz_One } from "next/font/google";
import React, { useState } from "react";
import Calender from "./Calender";
import MoodButton from "./MoodButton";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Dashboard() {
  const statuses = {
    "Num Days": 14,
    "Time Remaining": " 12:23:40",
    Date: new Date().toDateString(),
  };

  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleSelectedColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="px-2 md:px-10 flex flex-col gap-4">
      <div className="bg-[#f3dbea] py-2 md:py-4 px-4 grid grid-cols-3 gap-2 md:gap-4 rounded-lg">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className="text-xs md:text-base">
              <p className="truncate flex ">{status}</p>
              <p className={"truncate flex " + fugaz.className}>
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <p
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center mt-5 " + fugaz.className
        }
      >
        How do you feel <span className="textGradientStrongRed"> Today?</span>
      </p>
      <MoodButton handleSelectedColor={handleSelectedColor} />
      <Calender backgroundColor={backgroundColor} />
    </div>
  );
}
