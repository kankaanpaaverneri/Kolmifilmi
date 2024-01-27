import "./Esittely.css";
import "../index.css";

const Esittely = ({ ...props }) => {
    return (
        <div {...props}>
            <h1 className="page-title">Esittely</h1>
            <h2 id="introduction-text">Kolmifilmi on mainoselokuviin, yritysvideoihin ja musiikkivideoihin erikoistunut täyden palvelun tuotantoyhtiö. Tarjoamme mediaratkaisuja, joissa elokuvallinen tarinankerronta yhdistyy kohderyhmäsi tarpeisiin.</h2>
            <h2>ASIAKASLÄHTÖISESTI - EDULLISESTI - TARINA EDELLÄ</h2>
            <div className="reserve">
                <h2>OTA YHTEYTTÄ JA VARAA AIKA TAPAAMISEEN</h2>
                <div>
                    <h2>+358 504412581</h2>
                    <h2>sebastiankara@kolmifilmi.com</h2>
                </div>
            </div>
        </div>
    );
}

export default Esittely;