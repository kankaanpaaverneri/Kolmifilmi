import "./Elokuva.css";
import "../index.css";

const Elokuva = ({ film, ...props }) => {
    return (
        <div className="elokuva">
            <a {...props}><img {...props} src={film} /></a>
        </div>
    );
}

export default Elokuva;