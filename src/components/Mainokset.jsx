import fiksuposti_soittopyynto from "/fiksuposti_soittopyynto.mp4";
import "../index.css";
import "./Mainokset.css";

const Mainokset = ({ ...props }) => {
    return (
        <div {...props}>

            <div className="video-content">
                <video loop autoPlay controls muted src={fiksuposti_soittopyynto}></video>

                <div className="text-info">
                    <h1>Fiksuposti</h1>
                    <p>Toteutimme syksyllä 2023 Fiksupostin Soittopyyntöpalvelulle mainoksen, joka käsittelee yhtä yrittäjyyden yleisimmistä kompastuskivistä komedian keinoin.</p>
                    <p>| 30 sec / 3x10 sec</p>
                </div>
            </div>

        </div>
    );
}

export default Mainokset;