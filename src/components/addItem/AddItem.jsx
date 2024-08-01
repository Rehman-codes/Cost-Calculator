import convert from 'convert-units';
import './additems.css';

function AddItems(props) {

    const {
        itemName, setItemName, itemQuantity, setItemQuantity,
        unitPrice, setUnitPrice, itemQuantityUnit, setItemQuantityUnit,
        unitPriceUnit, setUnitPriceUnit, setallItems, setfinalPrice,
        setSingleItemPrice
    } = props;

    const updateItemName = (e) => setItemName(e.target.value);
    const updateItemQuantity = (e) => setItemQuantity(e.target.value);
    const updateUnitPrice = (e) => setUnitPrice(e.target.value);
    const updateItemQuantityUnit = (e) => setItemQuantityUnit(e.target.value);
    const updateUnitPriceUnit = (e) => setUnitPriceUnit(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const itemPrice = calculateItemPrice();
        setSingleItemPrice(itemPrice);

        const item = {
            ItemName: itemName,
            ItemQuantity: itemQuantity,
            UtemQuantityUnit: itemQuantityUnit,
            SingleItemPrice: itemPrice
        }

        setallItems(prevItems => [...prevItems, item]);

        clearInputs();
        calculateFinalPrice(itemPrice);
    };

    function clearInputs() {
        setItemName('');
        setItemQuantity('');
        setUnitPrice('');
        setItemQuantityUnit('');
        setUnitPriceUnit('');
    }

    function calculateItemPrice() {

        if (itemQuantityUnit && unitPriceUnit) {
            
            const itemQuantityUnitSupported = itemQuantityUnit;
            const unitPriceUnitSupported = unitPriceUnit;

            let convertedQuantity = itemQuantity;

            if (itemQuantityUnitSupported !== unitPriceUnitSupported) {
                try {
                    convertedQuantity = convert(itemQuantity).from(itemQuantityUnitSupported).to(unitPriceUnitSupported);
                } catch (error) {
                    console.error('Conversion error:', error);
                    return 0;
                }
            }

            return convertedQuantity * unitPrice;
        }
        return 0;
    }

    function calculateFinalPrice(itemPrice) {
        setfinalPrice(prevPrice => prevPrice + itemPrice);
    }

    return (
        <>
            <section id='additems'>
                <form onSubmit={handleSubmit}>
                    <div id='item-name'>
                        <input
                            type="text"
                            placeholder='Item name'
                            value={itemName}
                            onChange={updateItemName}
                            required
                        />
                    </div>

                    <div id='item-quantity'>
                        <input
                            type="number"
                            placeholder='Item quantity'
                            value={itemQuantity}
                            onChange={updateItemQuantity}
                            required
                        />
                        <select
                            onChange={updateItemQuantityUnit}
                            value={itemQuantityUnit}
                            required
                        >
                            <option value="" disabled>Unit</option>
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="gal">gallon</option>
                            <option value="qt">quart</option>
                            <option value="pnt">pint</option>
                            <option value="fl-oz">fl oz</option>
                        </select>
                    </div>

                    <div id='unit-price'>
                        <input
                            type="number"
                            placeholder='Unit price'
                            value={unitPrice}
                            onChange={updateUnitPrice}
                            required
                        />
                        <select
                            onChange={updateUnitPriceUnit}
                            value={unitPriceUnit}
                            required
                        >
                            <option value="" disabled>Unit</option>
                            <option value="ml">Rs/ml</option>
                            <option value="l">Rs/l</option>
                            <option value="gal">Rs/gallon</option>
                            <option value="qt">Rs/quart</option>
                            <option value="pnt">Rs/pint</option>
                            <option value="fl-oz">Rs/fl oz</option>
                        </select>
                    </div>

                    <div id='submit-button'>
                        <button type='submit'>Add item</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default AddItems;
