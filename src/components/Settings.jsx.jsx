import React from "react";
import { FormSettings } from "./FormSettings";
import { AiOutlineClose } from "react-icons/ai";
import { useContextApp } from "../hook/useContextApp";

export const Settings = () => {
  const { handleCloseModal } = useContextApp();

  return (
    <div className="wrapper-settings">
      <div className="settings animate__animated animate__fadeIn">
        <div className="settings-header">
          <h2 className="header-title">Ajustes</h2>
          <AiOutlineClose 
            onClick={handleCloseModal} 
            className="pointer"
          />
        </div>
        <hr />
        <p className="setting-paragraph">Tiempo (minutos)</p>
        <FormSettings />
      </div>
    </div>
  );
};
