import { useState, useEffect } from "react";

const Clock = () => {
  //Clock Feature
  const [time, SetTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  let hrs = time.getHours();
  let min = time.getMinutes();

  let meridiem = hrs >= 12 ? "PM" : "AM";

  hrs = hrs % 12 || 12;

  return `${date}/${month}/${year} | ${hrs}:${min} ${meridiem}`;
};

export default Clock;
