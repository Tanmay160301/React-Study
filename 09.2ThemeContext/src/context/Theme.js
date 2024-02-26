/**
 * 
 * Basic understanding about the project:
 * Light theme / Dark theme ... Prop drilling is avoided How? Aapn pratyek vali props madhun theme pathavli
 * nahi ahe
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

//We can pass default value down here
// Here we will assume ki ek default object asnar ahe
const theme = createContext({
    themeMode: "light",
    darkTheme: () => {},// hela apn parent madhe define karnar
    lightTheme: () => {}
});

//Creating our wrapper so that state and context are associated
export const ThemeProvider = theme.Provider;

export const useTheme = () => {
    return useContext(theme);
}