import { useState } from "react";
import "./Hinnasto.css";
import "../index.css"
import Tuote from "./Tuote";

const Hinnasto = ({ ...props }) => {

    const [tuotteet, setTuotteet] = useState([
        {
            title: "Mainoselokuva", price: "5900",
            info: <>
                <p>| 30 sek*</p>
                <p>| 1 Kuvauspäivä</p>
                <p>| 1 Ammattinäyttelijä</p>
                <p>| Käsikirjoittajan laatima tarina</p>
                <p>| Uskottava lavastus ja puvustus</p>
                <p>| Jälkityöt</p>
                <p>| 1 kommenttikierros</p>
                <br></br>
                <p>(* tai 3x10 sek reel)</p>

            </>
        },
        {
            title: "Yritysvideo", price: "3500",
            info:
                <>
                    <p>| 3 min</p>
                    <p>| 1 Kuvauspäivä*</p>
                    <p>| 1 Ammattinäyttelijä</p>
                    <p>| Lokaation tyylikäs koristelu</p>
                    <p>| Ammatti-kuvauskalusto</p>
                    <p>| Jälkityöt </p>
                    <p>| 1 kommenttikierros</p>
                    <br></br>
                    <p>(* Yrityksen toimitiloissa)</p>
                </>
        },
        {
            title: "Musiikkivideo", price: "3999",
            info:
                <>
                    <p>| 3 min</p>
                    <p>| 1 Kuvauspäivä </p>
                    <p>| 2 lokaatiota*</p>
                    <p>| Artistia mukaileva tyyli</p>
                    <p>| Elokuvatason kuvauskalusto</p>
                    <p>| Jälkityöt </p>
                    <p>| 2 kommenttikierrosta</p>
                    <br></br>
                    <p>(* ei sis. lokaatiovuokria)</p>
                </>
        }
    ]);

    function convertPrices(alv) {
        if (alv === "24") {
            tuotteet.forEach(tuote => {
                tuote.price = Number(tuote.price) * 1.24;
                tuote.price = Number(tuote.price).toFixed(2);
            })
        } else {
            tuotteet.forEach(tuote => {
                tuote.price = Number(tuote.price) / 1.24;
                tuote.price = Number(tuote.price).toFixed(2);
            })
        }

    }

    const [selectedButton, setSelectedButton] = useState("Mainoselokuva");
    const [alv, setAlv] = useState("24");
    const [alvButtonSelected, setAlvButtonSelected] = useState(false);
    const alv24 = "24";
    const alv0 = "0";
    function handleClick(buttonIdentifier) {
        console.log("Button clicked: ", buttonIdentifier);
        setSelectedButton(buttonIdentifier);
    }

    function handleAlvChange(identifier) {
        setAlv(prev => prev === alv0 ? alv24 : alv0);
        setAlvButtonSelected(() => identifier);
        convertPrices(alv);
    }

    return (
        <div {...props}>
            <h1>Hinnasto</h1>
            <div className="tuotteet">
                <button
                    className={selectedButton === "Mainoselokuva" ? 'button-highlight' : undefined}
                    onClick={() => handleClick("Mainoselokuva")}
                >Mainoselokuva</button>
                <button
                    className={selectedButton === "Yritysvideo" ? 'button-highlight' : undefined}
                    onClick={() => handleClick("Yritysvideo")}
                >Yritysvideo</button>
                <button
                    className={selectedButton === "Musiikkivideo" ? 'button-highlight' : undefined}
                    onClick={() => handleClick("Musiikkivideo")}
                >Musiikkivideo</button>
            </div>
            <div className="alv">
                <p>ALV.&nbsp;</p>
                <button className={"bold"} onClick={() => handleAlvChange("left")}>{alv === alv0 ? alv24 : alv0}%</button>
                <p>&nbsp;/&nbsp;</p>
                <button onClick={() => handleAlvChange("right")}>{alv === alv24 ? alv24 : alv0}%</button>

            </div>
            <div className="tuote-hinnasto" >
                {tuotteet.map((tuote, index) => {
                    const ids = ["mainosvideo", "yritysvideo", "musiikkivideo"]
                    return <Tuote
                        className={`${ids[index]}-color tuote ${selectedButton === tuote.title ? "" : "hidden"}`}
                        key={index}
                        title={tuote.title}
                        price={tuote.price}
                        info={tuote.info} />
                })}
            </div>
        </div>
    );
}

export default Hinnasto;