import './finalprice.css';

function FinalPrice(props) {
    const { finalPrice } = props;

    return (
        <>
            <section id='finalprice'>
                <h1>Rs. {finalPrice}</h1>
            </section>
        </>
    );
}

export default FinalPrice;
