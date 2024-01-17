import kolmifilmi from "../../public/20220215_verkan_kolmifilmi_logo_with_text_white_transparent_72ppi.png";

const Logo = ({ ...props }) => {
    return (
        <div {...props}>
            <img src={kolmifilmi} />
        </div>
    );
}

export default Logo;