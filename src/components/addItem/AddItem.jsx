import convert from 'convert-units';
import './additems.css';
import { useState, useEffect } from 'react';

function AddItems(props) {
    const {
        itemName, setItemName, itemQuantity, setItemQuantity,
        unitPrice, setUnitPrice, itemQuantityUnit, setItemQuantityUnit,
        unitPriceUnit, setUnitPriceUnit, setallItems, setfinalPrice,
        setSingleItemPrice
    } = props;

    const [errorMessage, setErrorMessage] = useState('');

    const updateItemName = (e) => setItemName(e.target.value);
    const updateItemQuantity = (e) => setItemQuantity(e.target.value);
    const updateUnitPrice = (e) => setUnitPrice(e.target.value);
    const updateItemQuantityUnit = (e) => setItemQuantityUnit(e.target.value);
    const updateUnitPriceUnit = (e) => setUnitPriceUnit(e.target.value);

    const handleSubmit = (e) => {

        e.preventDefault();
        
        if (!validateUnits()) {
            return;
        }

        const itemPrice = calculateItemPrice();
        setSingleItemPrice(itemPrice);

        const item = {
            ItemName: itemName,
            ItemQuantity: itemQuantity,
            ItemQuantityUnit: itemQuantityUnit,
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

    function validateUnits() {

        const quantityUnitType = getUnitCategory(itemQuantityUnit);
        const priceUnitType = getUnitCategory(unitPriceUnit);
        if (quantityUnitType !== priceUnitType) {
            setErrorMessage('Quantity unit and price unit must be of the same category');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    function getUnitCategory(unit) {

        const massUnits = ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't'];
        const volumeUnits = ['ml', 'l', 'gal', 'qt', 'pnt', 'fl-oz'];
    
        if (massUnits.includes(unit)) {
            return 'mass';
        }
    
        if (volumeUnits.includes(unit)) {
            return 'volume';
        }
    
        return null;
    }
    

    function calculateItemPrice() {
        if (itemQuantityUnit && unitPriceUnit) {
            let convertedQuantity = itemQuantity;

            if (itemQuantityUnit !== unitPriceUnit) {
                try {
                    convertedQuantity = convert(itemQuantity).from(itemQuantityUnit).to(unitPriceUnit);
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
                            <option value="mcg">mcg</option>
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                            <option value="oz">oz</option>
                            <option value="lb">lb</option>
                            <option value="mt">mt</option>
                            <option value="t">t</option>
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
                            <option value="mcg">Rs/mcg</option>
                            <option value="mg">Rs/mg</option>
                            <option value="g">Rs/g</option>
                            <option value="kg">Rs/kg</option>
                            <option value="oz">Rs/oz</option>
                            <option value="lb">Rs/lb</option>
                            <option value="mt">Rs/mt</option>
                            <option value="t">Rs/t</option>
                        </select>
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div id='submit-button'>
                        <button type='submit'>Add item</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default AddItems;
