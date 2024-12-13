import { useState } from "react";
import "./App.css";
import Navbar from "./components/website/Navbar";
import Hero from "./components/website/Hero";
import Delivery from "./components/website/Delivery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Delivery />
    </>
  );
}

export default App;
