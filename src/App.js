import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Service";
import Contact from "./Components/Contact";

function App() {
  const [showLodding, setshowLodding] = useState(true);

  setTimeout(() => {
    setshowLodding(false);
  }, 2500);

  return (
    <div className="w-full h-full bg-[#0a012a]">
      <Home />
    </div>
  );
}

export default App;
