import kolmifilmi from "/20220215_verkan_kolmifilmi_logo_with_text_white_transparent_72ppi.png";

import "../index.css"
import "./Logo.css";

const Logo = ({ ...props }) => {
    return (
        <div {...props}>
            <img src={kolmifilmi} />
        </div>
    );
}

export default Logo;