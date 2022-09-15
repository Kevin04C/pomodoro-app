import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useContextApp } from "../hook/useContextApp";
import { ErrorForm } from "./ErrorForm";

export const FormSettings = () => {
  const { configPomodoro, colorPomodoro, handleCloseModal, setColorPomodoro, changeSettingsPomodoro } = useContextApp();

  const [formState, setFormState] = useState(configPomodoro);
  const { pomodoro, shortBreak, longBreak } = formState;

  const [alert, setAlert] = useState("");


  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!pomodoro || !shortBreak || !longBreak) {
      return setAlert("*Los datos ingresados son incorrectos*");
    }

    handleCloseModal();
    changeSettingsPomodoro(formState);
    setAlert("");
  };

  const handleClickColor = ({ target }) => {
    target.parentNode.childNodes.forEach(
      (i) => i.classList && i.classList.remove("active")
    );
    setColorPomodoro({
      bgColor: target.getAttribute("data-color"),
      colorHex: target.getAttribute("data-color-hex"),
    });
    target.classList.add("active");
  };

  return (
    <>
      <div className="wrapper-form ">
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-times">
            <div className="form-group">
              <span className="form-group-title">pomodoro</span>
              <input 
                type="number" 
                name="pomodoro"
                value={pomodoro}
                min={1}
                onChange={handleInputChange}

              />
            </div>
            <div className="form-group">
              <span className="form-group-title">short break</span>
              <input
                type="number"
                name="shortBreak"
                value={shortBreak}
                onChange={handleInputChange}
                min={1}
              />
            </div>
            <div className="form-group">
              <span className="form-group-title">long break</span>
              <input
                type="number"
                name="longBreak"
                min={1}
                value={longBreak}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <hr />
          <div className="form-color">
            <h5 className="color-title">COLOR</h5>
            <div className="colors">
              <span
                className="circle orange-color"
                onClick={handleClickColor}
                data-color="orange-color"
                data-color-hex="#f16c6b"
              ></span>
              <span
                className="circle cian-color"
                onClick={handleClickColor}
                data-color="cian-color"
                data-color-hex="#4acbd2"
              ></span>
              <span
                className="circle purple-color"
                onClick={handleClickColor}
                data-color="purple-color"
                data-color-hex="#db7ffc"
              ></span>
            </div>
          </div>
          
          <ErrorForm>{alert}</ErrorForm>

          <input
            type="submit"
            value="Aplicar"
            className={`form-submit ${colorPomodoro.bgColor}`}
          />
        </form>
      </div>
    </>
  );
};
