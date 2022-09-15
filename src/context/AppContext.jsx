import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {

  //time in minutes
  const [configPomodoro, setConfigPomodoro] = useState({
    pomodoro: 20,
    shortBreak: 5,
    longBreak: 15,
  });

  const [showModal, setShowModal] = useState(false);
  const [colorPomodoro, setColorPomodoro] = useState({
    bgColor: "orange-color",
    colorHex: "#f16c6b",
  });
  const [pomodoroStatus, setPomodoroStatus] = useState("pomodoro")

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const changeSettingsPomodoro = ({ pomodoro, shortBreak, longBreak }) => {
    setConfigPomodoro({
      pomodoro,
      shortBreak,
      longBreak,
    });
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        handleCloseModal,
        handleOpenModal,
        setColorPomodoro,
        colorPomodoro,
        ...configPomodoro,
        configPomodoro,
        changeSettingsPomodoro,
        pomodoroStatus,
        setPomodoroStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
