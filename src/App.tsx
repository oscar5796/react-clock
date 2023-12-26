/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Display from "./components/display/index.tsx"; */
import "./App.css";
import ClockTimer, { CLOCK_FORMAT } from "./components/clock-timer/index.tsx";

function App() {

  return <ClockTimer format={CLOCK_FORMAT['12_HOURS']}/>;
}

export default App;
