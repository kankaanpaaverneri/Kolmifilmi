import "../index.css";

const Tuote = ({ title, price, info, ...props }) => {
    return (
        <div {...props}>
            <h1 className="title">{title}</h1>
            <p className="price">alk. {price} €</p>
            <div className="info">{info}</div>
        </div>
    );
}

export default Tuote;