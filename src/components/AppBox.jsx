import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function AppBox() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  
  let todayDay = new Date().getDay();
  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();

  return (
    <>
      <div className="app-box">
        
        <div className="today-date">
          <div className="day-head">{days[todayDay]}</div>
          <div className="date-text">
            {months[todayMonth]} {todayDate}, {todayYear}
          </div>
        </div>

        <TaskInput />

        <TaskList />

      </div>
    </>
  );
}

export default AppBox;
