import { useState } from "react";
import { useEffect } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { calculateMinuteAndSeconds } from "../helpers/calculateMinutesAndSeconds";
import { useContextApp } from "../hook/useContextApp";

export const PomodoroCircle = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [timeTotal, setTimeTotal] = useState(0);
  const [time, setTime] = useState(0);
  const [timePecentage, setTimePecentage] = useState(100);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const { colorPomodoro, pomodoroStatus, configPomodoro } = useContextApp();
  const { colorHex } = colorPomodoro;

  useEffect(() => {
    setIsPlay(false);
    const timePomodoro = configPomodoro[pomodoroStatus];
    setTimeTotal(timePomodoro);

    //convert minutes to seconds
    setTime(timePomodoro * 60);

    const { minutes, seconds } = calculateMinuteAndSeconds(timePomodoro * 60);
    setMinutes(minutes);
    setSeconds(seconds);
  }, [pomodoroStatus, configPomodoro]);

  useEffect(() => {
    if (isPlay) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlay]);

  useEffect(() => {
    const { minutes, seconds } = calculateMinuteAndSeconds(time);
    setMinutes(minutes);
    setSeconds(seconds);

    const percentage = Math.floor(((time / 60) * 100) / timeTotal);
    setTimePecentage(percentage);
    if (time === 0) {
      setIsPlay(false);
    }
  }, [time]);

  const handleChangePlay = () => {
    if (isPlay && time !== 0) {
      setIsPlay(false);
    }else if (!isPlay && time !== 0) {
      setIsPlay(true);
    }else {
      const res = confirm("El tiempo ya terminó ¿Deseas reiniciarlo?")
      if(res){
        const timePomodoro = configPomodoro[pomodoroStatus];
        setTime(timePomodoro * 60);
      }
    }
  };

  return (
    <div className="pomodoro-circle">
      <CircularProgressbarWithChildren
        maxValue={100}
        value={timePecentage}
        styles={buildStyles({
          pathColor: colorHex,
        })}
      >
        <h2 className="pomodoro-circle-time">
          {minutes}:{seconds}
        </h2>
        {isPlay ? (
          <button className="btn-control-pomodoro" onClick={handleChangePlay}>
            DETENER
          </button>
        ) : (
          <button className="btn-control-pomodoro" onClick={handleChangePlay}>
            INICIAR
          </button>
        )}
      </CircularProgressbarWithChildren>
    </div>
  );
};
