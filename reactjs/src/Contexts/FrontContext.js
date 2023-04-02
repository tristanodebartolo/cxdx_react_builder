import React, { createContext, useState } from 'react';
// Context
export const AgendaContext = createContext();
// Lib
import axios from 'axios';
// Tools
import { getData, getDataObject, getPager } from '../Utils/Tools';
// Init path

// Function
const FrontContextProvider = (props) => {

  // States
  const [theme, setTheme] = useState('theme-light');

  /**
   * selectTheme()
   *  Select current theme
   * @param {*} thm
   */
  const selectTheme = (thm) => {
    setTheme(thm)
  }


  return (
    <FrontContext.Provider
      value={{
        theme,
        selectTheme,
      }}>
      {props.children}
    </FrontContext.Provider>
  )
}

export default FrontContextProvider;
