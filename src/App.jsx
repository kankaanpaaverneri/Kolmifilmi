import './App.css'
import Esittely from './components/Esittely';
import Header from './components/Header';
import Logo from './components/Logo';
import Hinnasto from './components/Hinnasto';
import Tuotannot from './components/Tuotannot';
import { useState } from "react";
import Yhteystiedot from './components/Yhteystiedot';

function App() {
  const [navTabSelected, setNavTabSelected] = useState(0);

  const tabs = [
    <Logo className={"logo"} />,
    <Esittely className={"esittely"}/>,
    <Hinnasto className={"hinnasto"}/>,
    <Tuotannot className={"tuotannot"}/>,
    <Yhteystiedot className={"yhteystiedot"}/>
  ]
  return (
    <>
      <Header navTabSelected={navTabSelected} setNavTabSelected={setNavTabSelected} />
      {tabs[navTabSelected]}
    </>
  )
}

export default App
