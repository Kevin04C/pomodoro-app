import React from "react";
import { Pomodoro } from "./components/Pomodoro.jsx";
import { Settings } from "./components/Settings.jsx";
import { useContextApp } from "./hook/useContextApp.js";

function App() {
  const { showModal } = useContextApp();
  return (
    <>
      <Pomodoro />
      {showModal && <Settings />}
    </>
  );
}

export default App;
