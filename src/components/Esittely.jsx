import "./Esittely.css";
import "../index.css";

const Esittely = ({ ...props }) => {
    return (
        <div {...props}>
            <h1 className="page-title">Esittely</h1>
            <h2>Kolmifilmi on mainoselokuviin, yritysvideoihin ja musiikkivideoihin erikoistunut täyden palvelun tuotantoyhtiö. Tarjoamme mediaratkaisuja, joissa elokuvallinen tarinankerronta yhdistyy kohderyhmäsi tarpeisiin.</h2>
            <h2>ASIAKASLÄHTÖISESTI - EDULLISESTI - TARINA EDELLÄ</h2>
            <div className="reserve">
                <h3>OTA YHTEYTTÄ JA VARAA AIKA TAPAAMISEEN</h3>
                <div className="contact-info">
                    <p>+358 504412581</p>
                    <p>/</p>
                    <p>sebastiankara@kolmifilmi.com</p>
                </div>
            </div>
        </div>
    );
}

export default Esittely;