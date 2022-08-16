import "./App.css";
import Comp1 from "./components/comp1/Comp1";
import Comp2 from "./components/comp2/Comp2";
import Comp3 from "./components/comp3/Comp3";
import MyStepper from "./components/stepper/MyStepper";

const stepsData = [
  { title: "step-1", component: Comp1 },
  { title: "step-2", component: Comp2 },
  { title: "step-3", component: Comp3 },
];
function App() {
  return (
    <div className="App">
      <MyStepper stepsData={stepsData}></MyStepper>
    </div>
  );
}

export default App;
