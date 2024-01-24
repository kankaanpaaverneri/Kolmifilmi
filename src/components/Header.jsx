import kolmifilmi_white from "/20220215_verkan_kolmifilmi_logo_no_text_white_transparent_72ppi.png";
import kolmifilmi_black from "/20220215_verkan_kolmifilmi_logo_no_text_black_transparent_72ppi.png";
import "./Header.css";
import "../index.css";

const Header = ({ navTabSelected, setNavTabSelected }) => {

    function handleClick(navTabIdentifier) {
        setNavTabSelected(navTabIdentifier);
    }

    return (
        <header>
            <a
                className={navTabSelected === 0 ? "button-highlight" : ""}
                onClick={() => handleClick(0)}
            ><img src={navTabSelected === 0 ? kolmifilmi_black : kolmifilmi_white} /></a>
            <a
                className={navTabSelected === 1 ? "button-highlight" : ""}
                onClick={() => handleClick(1)}
            >Esittely</a>
            <a
                className={navTabSelected === 2 ? "button-highlight" : ""}
                onClick={() => handleClick(2)}
            >Hinnasto</a>
            <a
                className={navTabSelected === 3 ? "button-highlight" : ""}
                onClick={() => handleClick(3)}
            >Tuotannot</a>
            <a
                className={navTabSelected === 4 ? "button-highlight" : ""}
                onClick={() => handleClick(4)}
            >Yhteystiedot</a>
        </header>
    );
}

export default Header;