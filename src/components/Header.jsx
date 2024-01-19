import kolmifilmi_white from "/public/20220215_verkan_kolmifilmi_logo_no_text_white_transparent_72ppi.png";
import kolmifilmi_black from "/20220215_verkan_kolmifilmi_logo_no_text_black_transparent_72ppi.png";
import "../index.css";


const Header = ({ navTabSelected, setNavTabSelected }) => {

    function handleClick(navTabIdentifier) {
        setNavTabSelected(navTabIdentifier);
        console.log(navTabSelected);
    }

    return (
        <header>
            <a
                className={navTabSelected === "Logo" ? "button-highlight" : ""}
                onClick={() => handleClick("Logo")}
            ><img src={navTabSelected === "Logo" ? kolmifilmi_black : kolmifilmi_white} /></a>
            <a
                className={navTabSelected === "Esittely" ? "button-highlight" : ""}
                onClick={() => handleClick("Esittely")}
            >Esittely</a>
            <a
                className={navTabSelected === "Hinnasto" ? "button-highlight" : ""}
                onClick={() => handleClick("Hinnasto")}
            >Hinnasto</a>
            <a
                className={navTabSelected === "Tuotannot" ? "button-highlight" : ""}
                onClick={() => handleClick("Tuotannot")}
            >Tuotannot</a>
            <a
                className={navTabSelected === "Yhteystiedot" ? "button-highlight" : ""}
                onClick={() => handleClick("Yhteystiedot")}
            >Yhteystiedot</a>
        </header>
    );
}

export default Header;