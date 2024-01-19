import "../index.css";
import "./Yhteystiedot.css";

import sebastian from "/sebastian_low_resolution.jpg";
import valtti from "/valtti_low_resolution.jpg";
import verneri from "/verneri_low_resolution.jpg";

const Yhteystiedot = ({ ...props }) => {
    return (
        <div {...props}>
            <h1>Yhteystiedot</h1>
            <div className="profile-pictures">
                <div className="profile">
                    <img src={sebastian} />
                    <p>CEO / Director of Partnerships</p>
                    <p>sebastiankara@kolmifilmi.com</p>
                </div>
                <div className="profile">
                    <img src={valtti} />
                    <p>Principal / Head of Creative Development</p>
                    <p>valttihyvarinen@kolmifilmi.com</p>
                </div>
                <div className="profile">
                    <img src={verneri} />
                    <p>Tech Supervisor / Head of Post Production</p>
                    <p>vernerikankaanpaa@kolmifilmi.com</p>
                </div>
            </div>
        </div>
    );
}

export default Yhteystiedot;