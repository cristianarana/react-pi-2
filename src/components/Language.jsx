import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };


  return (
    <div>
        <select onChange={changeLanguage}>
            <option value="en" select="selected">English</option> 
            <option value="es">Español</option> 
        </select>
    </div>

  );

};


export default LanguageSelector;