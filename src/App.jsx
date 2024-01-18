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
    <Logo className={`logo ${navTabSelected === "Logo" ? "" : "hidden"}`} />,
    <Esittely className={`esittely ${navTabSelected === "Esittely" ? "" : "hidden"}`} />,
    <Hinnasto className={`hinnasto ${navTabSelected === "Hinnasto" ? "" : "hidden"}`} />,
    <Tuotannot className={`tuotannot ${navTabSelected === "Tuotannot" ? "" : "hidden"}`} />,
    <Yhteystiedot className={`yhteystiedot ${navTabSelected === "Yhteystiedot" ? "" : "hidden"}`} />
  ];
  return (
    <>
      <div className='backdrop'></div>
      <Header navTabSelected={navTabSelected} setNavTabSelected={setNavTabSelected} />
      {tabs}
    </>
  )
}

export default App
