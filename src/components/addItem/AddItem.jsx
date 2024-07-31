import './additems.css';

function AddItems() {


    return (
        <>
            <section id='additems'>
                <form>

                    <div id='item-name'>
                        <input type="text" placeholder='Item name' />
                    </div>

                    <div id='item-quantity'>
                        <input type="number" placeholder='Item quantity' />
                        <select>
                            <option value="" disabled selected>Unit</option>
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                        </select>
                    </div>

                    <div id='unit-price'>
                        <input type="number" placeholder='Unit price' />
                        <select>
                            <option value="" disabled selected>Unit</option>
                            <option value="ml">Rs/ml</option>
                            <option value="l">Rs/l</option>
                        </select>
                    </div>

                    <div id='submit-button'>
                        <button type='submit'>Add item</button>
                    </div>

                </form>
            </section>
        </>
    )
}

export default AddItems;