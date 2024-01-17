import './App.css'
import Esittely from './components/Esittely';
import Header from './components/Header';
import Logo from './components/Logo';
import Hinnasto from './components/Hinnasto';
import { useState } from "react";

function App() {
  const [navTabSelected, setNavTabSelected] = useState("Logo");

  const tabs = [
    <Logo className={`logo ${navTabSelected === "Logo" ? "" : "hidden"}`} />,
    <Esittely className={`esittely ${navTabSelected === "Esittely" ? "" : "hidden"}`} />,
    <Hinnasto className={`hinnasto ${navTabSelected === "Hinnasto" ? "" : "hidden"}`} />];
  return (
    <>
      <Header navTabSelected={navTabSelected} setNavTabSelected={setNavTabSelected} />
      {tabs}
    </>
  )
}

export default App
