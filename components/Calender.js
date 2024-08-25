import { Fugaz_One } from "next/font/google";
import React from "react";

const Fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sept",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};
const now = new Date();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Calender(props) {
  const year = 2024;
  const month = "August";
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth = new Date(
    year,
    Object.keys(month).indexOf(month) + 1,
    0
  ).getDate();

  const daysToDisplay = firstDayOfMonth + daysInMonth;

  const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

  const { backgroundColor } = props;

  return (
    <div className="flex flex-col overflow-hidden gap-1 pb-4">
      <h3
        className={"p-2 items-center text-center text-2xl " + Fugaz.className}
      >
        {month}
      </h3>
      {[...Array(numRows).keys()].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="grid grid-cols-7 gap-1 ">
            {dayList.map((dayOfWeek, dayOfWeekIndex) => {
              let dayIndex =
                rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);

              let dayDisplay =
                dayIndex > daysInMonth
                  ? false
                  : row === 0 && dayOfWeekIndex < firstDayOfMonth
                  ? false
                  : true;
              let isToday = dayIndex === now.getDate();

              if (!dayDisplay) {
                return <div key={dayOfWeekIndex} className="bg-white" />;
              }
              return (
                <div
                  key={dayOfWeekIndex}
                  className={
                    "border-2 solid p-2 md:p-5 rounded-xl mx-aut0 text-xs sm:text-sm " +
                    (isToday ? " border-[#a199a1]" : " border-slate-200 ")
                  }
                  style={{
                    backgroundColor: isToday ? backgroundColor : "white",
                  }}
                >
                  {dayIndex}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
