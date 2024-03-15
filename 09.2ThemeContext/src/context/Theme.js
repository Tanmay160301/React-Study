/**
 * 
 * Basic understanding about the project:
 * Light theme / Dark theme ... Prop drilling is avoided How? Aapn pratyek vali props madhun theme pathavli nahi ahe
 * ..Hya Project chya context madhe Card , Feature and ThemeButton madhe aapn props send kelele nahi ahet
 * aapn ekach thikani change kelela(HTML cha class) ahe ani toh change bakicha thikani reflect kartoy
 * 
 * New patterns observed:
 * 1. create context chya ithech default values deu shakto
 * 
 * 
 * 
 */


import { createContext,useContext } from "react";

// Step 1: creating Context
//We can pass default value down here
// Here we will assume ki ek default object asnar ahe
const theme = createContext({
    themeMode: "light", // hyachya corresponding ek state variable create karna in parent
    darkTheme: () => {},// hela apn parent madhe define karnar
    lightTheme: () => {}
});

// Step 2. Creating our Provider
//Creating our wrapper so that state and context are associated
export const ThemeProvider = theme.Provider;

//Step 3. Creating a custom hook
export const useTheme = () => {
    return useContext(theme);
}