import "./Elokuvat.css";
import "../index.css";
import Elokuva from "./Elokuva.jsx"

import pinnat_kireena_juliste from "/pk_juliste_low_resolution.png";
import taivaanranta_juliste from "/tr_juliste.png";

const Elokuvat = ({ ...props }) => {
    return (
        <div {...props}>
            <Elokuva
                target="_blank"
                href={"https://www.imdb.com/title/tt28308058/?ref_=nm_knf_t_1"}
                id={"pinnat_kireena_juliste"}
                film={pinnat_kireena_juliste} />
            <Elokuva
                target="_blank"
                href={"https://www.imdb.com/title/tt27600587/?ref_=nm_knf_t_2"}
                id={"taivaanranta-juliste"}
                film={taivaanranta_juliste} />
        </div>
    );
}

export default Elokuvat;