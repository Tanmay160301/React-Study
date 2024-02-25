import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = UserContext.Provider;

//Child component will call this custom hook to use the components
export  const useUserContext = () => {
    return useContext(UserContext);
}