/**
 * Basic understanding from this Project:
 *
 * Problem : Prop drilling, ki sarkha sarkha parent to child props pathvyla lagtat.. jyachya mule
 * kay hota ki tya pn functional components na props jatat jyanna tyanchi garaj nahi ahe
 * Unnessecary passing of data to them(components) which dont require them
 *
 * Solution: Context API...
 * Famous Eg: ek file madhe sagla concurrent data thevne and tyala functional components lagel tasa access
 * karnar
 *
 Actually aapn ek context create karnar... ani tyachya corresponding context attributes create karnar
 in parent components(in the form of state variable) jo tyachya child la data pass karnar ahe
 ...te context attributes aapn using state variables create karnar...
 tya context la ani tya context attributes la aapn join or associate karnar using
 <context.Provider value="">{children} </context.Provider> property
 *
 * children madhe useContext cha use karun te state variables access karu shaknar
 * so that children can update the context or read the context...
 *
 *
 */

import { createContext, useContext } from "react";

// Step 1
//Creation of context
export const UserContext = createContext(null); 
// or we can even give an object as a parameter here ... But we have to remember that for every property of the object we need to create a state variable corresponding to it... and we need to provide an empty functionality to it


// Step 2
//We have created UserContextProvider so that we can wrap it in parent component and then
//we could associate context Attributes to the context and Child components could access it using useContext
export const UserContextProvider = UserContext.Provider;


// Step 3
//Child component will call this custom hook to use the components...
//We have created a custom hook so that ekach import madhe kam hoil
// If we have not created a custom hook then UserContext pn send karyla lagnar and
// useContext pn send karyla lagnar
export const useUserContext = () => {
  return useContext(UserContext);
};
