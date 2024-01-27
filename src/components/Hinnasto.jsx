import { useState } from "react";
import "./Hinnasto.css";
import "../index.css"
import Tuote from "./Tuote";
import { HinnastoData } from "../HinnastoData";

const Hinnasto = ({ ...props }) => {

    const tuotteet = [...HinnastoData];

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

    const [selectedButton, setSelectedButton] = useState("Mainosvideo");
    const [alv, setAlv] = useState("24");
    const alv24 = "24";
    const alv0 = "0";
    function handleClick(buttonIdentifier) {
        setSelectedButton(buttonIdentifier);
    }

    function handleAlvChange() {
        setAlv(prev => prev === alv0 ? alv24 : alv0);
        convertPrices(alv);
    }
    const selection = tuotteet.find(tuote => tuote.title === selectedButton);
    return (
        <div {...props}>
            <h1 className="page-title">Hinnasto</h1>
            <div className="tuote-buttons">
                <button
                    className={selectedButton === "Mainosvideo" ? 'button-highlight' : undefined}
                    onClick={() => handleClick("Mainosvideo")}
                >Mainosvideo</button>
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
                <b><p>ALV.&nbsp;</p></b>
                <button className={"bold"} onClick={handleAlvChange}>{alv === alv0 ? alv24 : alv0}%</button>
                <p>&nbsp;/&nbsp;</p>
                <button onClick={handleAlvChange}>{alv === alv24 ? alv24 : alv0}%</button>

            </div>
            <Tuote
                className={`${selection.title.toLowerCase()}-color tuote`}
                title={selection.title}
                price={selection.price}
                info={selection.info}
            />
        </div>
    );
}

export default Hinnasto;