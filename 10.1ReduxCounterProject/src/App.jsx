/**
 * 3 different things we need to understand redux:
 * Store(global state), Actions(objects) and Reducers(functions)
 * 
 * Action is an object with 2 properties as type and payload... type defines what the object is repsonsible 
 * for doing and payload is the message ... redux store je ahe toh action bghnar ani tyachya 
 * corresponding reducer call karnar
 * 
 * Reducer je ahe it is responsible for taking the action and is responsible for making the actual changes
 * in the state... 
 * 
 * One Important point here in the context of reducer :
 * In redux , in general it is the rule that NEVER MUTATE THE STATE DIRECTLY, as it could lead to information
 * loss... that is why context api chya todo list chya project madhe we used useState with callback so that 
 * adicha state aplyala access karta yeil ....
 * reducers is created by developers in such a way that it internally creates a new state and incorporate the
 * recent changes and then replace the existing state with the new state... and from the perspective of developer
 * you could write a mutable code ... which redux will internally implement it in a copy ... This is done via
 * Imer Library ... which in collaboration with redux does this thing
 * 
 * 
 * 
 * Aapn application la multiple slices madhe divide karto(user, product, dashboard) ...
 * pratyek slice madhe corresponding states asnar .... ani store madhe global state chya perspective
 * ne observe karta yeto
 * 
 * 
 * 
 * 
 *
 */
import "./App.css";
import Counter from "./components/Counter";
import Text from "./components/Text";

function App() {

  return (
    <>
      <Counter />
      <Text/>
    </>
  );
}

export default App;
