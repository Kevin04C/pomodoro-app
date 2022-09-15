import React, { useEffect } from "react";
import { AiFillSetting } from "react-icons/ai";
import { useContextApp } from "../hook/useContextApp";
import "react-circular-progressbar/dist/styles.css";
import { useRef } from "react";
import { PomodoroCircle } from "./PomodoroCircle";

export const Pomodoro = () => {
  const { handleOpenModal, pomodoro, shortBreak, longBreak, setPomodoroStatus } = useContextApp();



  const changeStatePomodoro = ({ target }) => {
    target.parentNode.childNodes.forEach(i => i.classList.remove("active-button"));
    target.classList.add("active-button")
  };
  
  
  const setPomodorDefault = (e)  => {
    changeStatePomodoro(e);
    setPomodoroStatus("pomodoro")
  }
  
  const setShortBreakPomodoro = (e)  => {
    changeStatePomodoro(e);
    setPomodoroStatus("shortBreak")
  }

  const setLongtBreakPomodoro = (e)  => {
    changeStatePomodoro(e);
    setPomodoroStatus("longBreak")

  }


  return (
    <div className="pomodoro">
      <h3 className="pomodoro-title">pomodoro</h3>
      <div className="pomodoro-buttons">
        <span className="pomodoro-button active-button" onClick={setPomodorDefault}>
          pomodoro
        </span>
        <span className="pomodoro-button" onClick={setShortBreakPomodoro}>
          short break
        </span>
        <span className="pomodoro-button" onClick={setLongtBreakPomodoro}>
          long break
        </span>
      </div>
      <PomodoroCircle />
      <AiFillSetting className="icon-settings" onClick={handleOpenModal} />
    </div>
  );
};
