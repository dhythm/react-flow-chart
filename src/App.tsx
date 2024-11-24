import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Steps } from "./components/Steps";
import { StepChart } from "./components/StepChart";

function App() {
  const [count, setCount] = useState(0);

  return <StepChart />;
}

export default App;
