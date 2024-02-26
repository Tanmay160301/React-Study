import { ThemeProvider } from "./context/Theme";
import { useState, useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import Feature from "./components/Feature";

import "./App.css";

function App() {

  //Creating a state variable to associate with the context
  const [themeMode, setthemeMode] = useState("light");

  // functions through setState change karu shakto ...
  const lightTheme = () => {
    setthemeMode("light");
  };

  const darkTheme = () => {
    setthemeMode("dark");
  };

  // Ek new pattern ki functions pass kelele ahe jyahcya aat setState ni context attribute update
  // hoat ahe

  //Actual change in theme....Remember this is an important step
  //ithuch child elements la ek prakare kalnar ki theme kutli thevychi ahe
  //Ek pattern aapn asa pn bghitla ki kutla pn HTML element cha jo class ahe tithe aapn context-attribute 
  // deu shakto
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    // Associating context and state here
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
          <div className="w-full max-w-sm mx-auto">
            
          </div>
        </div>
      </div>
      <div>
      <Feature />
      </div>
    </ThemeProvider>
  );
}

export default App;
