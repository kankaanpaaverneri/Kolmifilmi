

const Tuote = ({ title, price, info, ...props }) => {
    return (
        <div {...props}>
            <h1>{title}</h1>
            <p>alk. {price} €</p>
            <div>
                {info.map((inf, index) => {
                    return <p key={index}>{inf}</p>
                })}
            </div>
        </div>
    );
}

export default Tuote;