import { useState } from 'react';
import './allitems.css';

function AllItems() {

    const [allItems, setallItems] = useState(null);

    return (
        <>
            <section id="allitems">

                {allItems ?
                    <div className='item'>

                        <div>
                            <h4>Red Ink</h4>
                        </div>

                        <div>
                            <h5>100 ml</h5>
                        </div>

                        <div>
                            <h5>Rs. 2000</h5>
                        </div>

                        <div>
                            <button id='remove-item'>X</button>
                        </div>

                    </div>

                    : <h1>No items Added yet!</h1>
                }

            </section>
        </>
    )
}

export default AllItems;