import './App.css'
import Esittely from './components/Esittely';
import Header from './components/Header';
import Logo from './components/Logo';
import Hinnasto from './components/Hinnasto';
import Tuotannot from './components/Tuotannot';
import { useState } from "react";
import Yhteystiedot from './components/Yhteystiedot';

function App() {
  const [navTabSelected, setNavTabSelected] = useState("Logo");

  const tabs = [
    <Logo key={1} className={`logo ${navTabSelected === "Logo" ? "" : "hidden"}`} />,
    <Esittely key={2} className={`esittely ${navTabSelected === "Esittely" ? "" : "hidden"}`} />,
    <Hinnasto key={3} className={`hinnasto ${navTabSelected === "Hinnasto" ? "" : "hidden"}`} />,
    <Tuotannot key={4} className={`tuotannot ${navTabSelected === "Tuotannot" ? "" : "hidden"}`} />,
    <Yhteystiedot key={5} className={`yhteystiedot ${navTabSelected === "Yhteystiedot" ? "" : "hidden"}`} />
  ];
  return (
    <>
      <Header navTabSelected={navTabSelected} setNavTabSelected={setNavTabSelected} />
      {tabs}
    </>
  )
}

export default App
