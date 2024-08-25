"use client";
import { Fugaz_One } from "next/font/google";
import React from "react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const moods = [
  { emoji: "😢", label: "Down", color: "#efe1e9" },
  { emoji: "😔", label: "Sad", color: "#f0d0e2" },
  { emoji: "🙂", label: "Good", color: "#ebb9d5" },
  { emoji: "😋", label: "Great", color: "#ea98c7" },
  { emoji: "🤩", label: "Fun", color: "#e17eb6" },
];

export default function MoodButton(props) {
  const { handleSelectedColor } = props;

  return (
    <div className="px-3 py-2 flex items-stretch flex-wrap mt-2 gap-4">
      {moods.map((mood, moodIndex) => {
        return (
          <button
            key={moodIndex}
            className=" items-center flex flex-col flex-1 p-2 styleMoods hoverMoods rounded-lg text-center "
            style={{ backgroundColor: mood.color }}
            onClick={() => handleSelectedColor(mood.color)}
          >
            <p className="text-2xl md:text-3xl ">{mood.emoji}</p>
            <p className={"textGradientStrongRed " + fugaz.className}>
              {mood.label}
            </p>
          </button>
        );
      })}
    </div>
  );
}
