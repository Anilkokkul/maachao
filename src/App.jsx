import "./App.css";
import Navbar from "./components/website/Navbar";
import Hero from "./components/website/Hero";
import Delivery from "./components/website/Delivery";

function App() {
  return (
    <>
      <Navbar /> // Rendering the Navbar component
      <Hero /> // Rendering the Hero component
      <Delivery /> // Rendering the Delivery component
    </>
  );
}

export default App;
