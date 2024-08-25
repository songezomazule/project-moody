import React from "react";
import { Fugaz_One } from "next/font/google";
import Link from "next/link";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-2 md:py-5 gap-4 sm:gap-5">
      <h1 className={"text-xl md:text-2xl " + fugaz.className}>
        Welcome to <span className="textGradientStrongRed">Moody!</span>
      </h1>
      <p
        className={
          "text-xl sm:text-2xl md:text-3xl text-center w-full mx-auto max-w-[600px] " +
          fugaz.className
        }
      >
        Track your moods, find insights, and embrace your emotions
      </p>
      <p className="text-sm sm:text-lg text-center w-full mx-auto max-w-[600px]">
        Log your mood every day and observe your emotional journey{" "}
        <span className="font-semibold">over the year.</span>
      </p>
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="space-y-4 flex flex-col items-center ">
          <p className="flex items-center max-auto text-gray-700">
            <i className="fas fa-brain textGradientStrongRed text-2xl mr-4"></i>
            <span className="text-base md:text-lg font-medium">
              Understand your Emotions
            </span>
          </p>
          <p className="flex items-center max-auto text-gray-700">
            <i className="fa-regular textGradientStrongRed  fa-calendar-days text-2xl mr-4"></i>
            <span className="text-base md:text-lg font-medium">
              Track Your Mood Over Time
            </span>
          </p>
        </div>
      </div>
      <Link
        href="/login"
        className={
          "border-2 border-solid text-sm mx-auto p-4 rounded-xl bg-[#e693c6] hover:bg-[#e85eb3] " +
          fugaz.className
        }
      >
        Start Tracking
      </Link>
    </div>
  );
}
