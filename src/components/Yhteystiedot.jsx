import "../index.css";

import sebastian from "../../public/sebastian.jpg";
import valtti from "../../public/valtti.jpg";
import verneri from "../../public/verneri.jpg";

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