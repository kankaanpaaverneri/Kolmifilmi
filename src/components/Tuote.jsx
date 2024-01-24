

const Tuote = ({ title, price, info, ...props }) => {
    return (
        <div {...props}>
            <h1 className="title">{title}</h1>
            <p className="price">alk. {price} €</p>
            <div className="info">
                {info.map((inf, index) => {
                    return <p key={index}>{inf}</p>
                })}
            </div>
        </div>
    );
}

export default Tuote;