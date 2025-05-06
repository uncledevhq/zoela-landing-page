"use client";

import { useState, useEffect } from "react";

interface ClockProps {
  initialDays: number;
}

export function Clock({ initialDays }: ClockProps) {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="flex items-end">
      <div className="text-[120px] md:text-[180px] font-bold leading-none">
        {days < 10 ? `0${days}` : days}
      </div>

      <div className="bg-[#D0B30C] text-black px-4 py-2 text-xl font-bold mb-4 ml-2">
        days
      </div>

      <div className="flex ml-4 text-4xl font-bold">
        <div className="flex flex-col items-center">
          <span>{hours < 10 ? `0${hours}` : hours}</span>
          <span className="text-sm font-normal">H</span>
        </div>

        <div className="mx-2">:</div>

        <div className="flex flex-col items-center">
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
          <span className="text-sm font-normal">M</span>
        </div>

        <div className="mx-2">:</div>

        <div className="flex flex-col items-center">
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
          <span className="text-sm font-normal">S</span>
        </div>
      </div>
    </div>
  );
}
