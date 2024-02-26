/**
 * Basic understanding from this Project:
 * 
 * Problem : Prop drilling, ki sarkha sarkha parent to child props pathvyla lagtat.. jyachya mule 
 * kay hota ki tya pn functional components na props jatat jyanna tyanchi garaj nahi ahe 
 * Unnessecary passing of data to them(components) which dont require them 
 * 
 * Solution: Context ... 
 * Famous Eg: ek file madhe sagla concurrent data thevne and tyala functional components lagel tasa access 
 * karnar
 * 
 * Actually aapn ek  context create karnar... ani tyachya corresponding context attributes create karnar
 * in parent components jo tyachya child la data pass karnar ahe 
 * ...te context attributes aapn using state variables create karnar... 
 * tya context la ani tya context attributes la aapn join or associate karnar using 
 * <context.Provider value="">{children} </context.Provider> property
 * 
 * children madhe useContext cha use karun te state variables access karu shaknar
 * so that children can update the context or read the context...
 * 
 * 
 */


import { createContext, useContext } from "react";

//Creation of context
export const UserContext = createContext(null);//creating a context

//We have created UserContextProvider so that we can wrap it i parent component and then
//we could associate context Attributes to the context
export const UserContextProvider = UserContext.Provider;

//Child component will call this custom hook to use the components...
//We have created a custom hook so that ekach import madhe kam hoil
// If we have not created a custom hook then UserContext pn send karyla lagnar and
// useContext pn send karyla lagnar
export  const useUserContext = () => {
    return useContext(UserContext);
}