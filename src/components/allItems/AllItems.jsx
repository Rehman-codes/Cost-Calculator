import './allitems.css';

function AllItems(props) {
    const { allItems, setallItems, finalPrice, setfinalPrice } = props;

    const removeItem = (index) => {
        const removedItemPrice = allItems[index].SingleItemPrice;
        setallItems(prevItems => prevItems.filter((item, i) => i !== index));
        setfinalPrice(prevPrice => prevPrice - removedItemPrice);
    };

    const renderAllItems = allItems.map((item, index) => (
        <div className='item' key={index}>
            <div>
                <h4>{item.ItemName}</h4>
            </div>
            <div>
                <h5>{item.ItemQuantity + " " + item.UtemQuantityUnit}</h5>
            </div>
            <div>
                <h5>Rs.{item.SingleItemPrice}</h5>
            </div>
            <div>
                <button id='remove-item' onClick={() => removeItem(index)}>X</button>
            </div>
        </div>
    ));

    return (
        <>
            <section id="allitems">
                {allItems.length > 0 ? renderAllItems : <h1>No items Added yet!</h1>}
            </section>
        </>
    );
}

export default AllItems;
