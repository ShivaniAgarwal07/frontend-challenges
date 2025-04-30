import "./App.css";
import ChipsInput from "./day01/ChipsInput";
import Accordion from "./day02/Accordion";
import { items } from "./day02/items";

function App() {
  return (
    <div className="App">
      {/* <ChipsInput /> */}
      <Accordion  items={items}/>
      

    </div>
  );
}

export default App;
