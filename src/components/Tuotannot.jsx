import { useState } from "react";
import "../index.css";
import Elokuvat from "./Elokuvat";
import Mainokset from "./Mainokset";


const Tuotannot = ({ ...props }) => {

    const [categoryButton, setCategoryButton] = useState("Elokuvat");

    function handleClick(identifier) {
        setCategoryButton(() => identifier);
    }

    return (
        <div {...props}>
            <h1>Tuotannot</h1>
            <div className="tuotanto-kategoriat">
                <button
                    className={categoryButton === "Elokuvat" ? "button-highlight" : ""}
                    onClick={() => handleClick("Elokuvat")}
                >Elokuvat</button>
                <button
                    className={categoryButton === "Mainokset" ? "button-highlight" : ""}
                    onClick={() => handleClick("Mainokset")}
                >Mainokset</button>
            </div>
            {categoryButton === "Elokuvat" ? <Elokuvat className={"elokuvat"} /> : undefined}
            {categoryButton === "Mainokset" ? <Mainokset className={"mainokset"} /> : undefined}
        </div>
    );
}

export default Tuotannot;