import { useRef } from 'react';
import './additems.css';

function AddItems(props) {
    const {
        itemName,
        setItemName,
        itemQuantity,
        setItemQuantity,
        unitPrice,
        setUnitPrice,
        itemQuantityUnit,
        setItemQuantityUnit,
        unitPriceUnit,
        setUnitPriceUnit,
        allItems,
        setallItems
    } = props;

    const itemNameRef = useRef(null);
    const itemQuantityRef = useRef(null);
    const unitPriceRef = useRef(null);
    const itemQuantityUnitRef = useRef(null);
    const unitPriceUnitRef = useRef(null);

    const updateItemName = (e) => setItemName(e.target.value);
    const updateItemQuantity = (e) => setItemQuantity(e.target.value);
    const updateUnitPrice = (e) => setUnitPrice(e.target.value);
    const updateItemQuantityUnit = (e) => setItemQuantityUnit(e.target.value);
    const updateUnitPriceUnit = (e) => setUnitPriceUnit(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Item Name:', itemName);
        console.log('Item Quantity:', itemQuantity);
        console.log('Item Quantity Unit:', itemQuantityUnit);
        console.log('Unit Price:', unitPrice);
        console.log('Unit Price Unit:', unitPriceUnit);

        clearInputs();
    };

    function clearInputs() {
        setTimeout(() => {
            itemNameRef.current.value = '';
            itemQuantityRef.current.value = '';
            unitPriceRef.current.value = '';
            itemQuantityUnitRef.current.value = '';
            unitPriceUnitRef.current.value = '';
        }, 500);
    }

    return (
        <>
            <section id='additems'>
                <form onSubmit={handleSubmit}>
                    <div id='item-name'>
                        <input
                            type="text"
                            placeholder='Item name'
                            onChange={updateItemName}
                            ref={itemNameRef}
                            required
                        />
                    </div>

                    <div id='item-quantity'>
                        <input
                            type="number"
                            placeholder='Item quantity'
                            onChange={updateItemQuantity}
                            ref={itemQuantityRef}
                            required
                        />
                        <select
                            onChange={updateItemQuantityUnit}
                            ref={itemQuantityUnitRef}
                            value={itemQuantityUnit}
                            required
                        >
                            <option value="" disabled>Unit</option>
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="gallon">gallon</option>
                            <option value="quart">quart</option>
                            <option value="pint">pint</option>
                            <option value="fl_oz">fl oz</option>
                        </select>
                    </div>

                    <div id='unit-price'>
                        <input
                            type="number"
                            placeholder='Unit price'
                            onChange={updateUnitPrice}
                            ref={unitPriceRef}
                            required
                        />
                        <select
                            onChange={updateUnitPriceUnit}
                            ref={unitPriceUnitRef}
                            value={unitPriceUnit}
                            required
                        >
                            <option value="" disabled>Unit</option>
                            <option value="ml">Rs/ml</option>
                            <option value="l">Rs/l</option>
                            <option value="gallon">Rs/gallon</option>
                            <option value="quart">Rs/quart</option>
                            <option value="pint">Rs/pint</option>
                            <option value="fl_oz">Rs/fl oz</option>
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
