import { useState } from 'react';
import './App.css';
import FinalPrice from './components/finalPrice/FinalPrice';
import Title from './components/title/Title';
import AllItems from './components/allItems/AllItems';
import AddItems from './components/addItem/AddItem';

function App() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [itemQuantityUnit, setItemQuantityUnit] = useState('');
  const [unitPriceUnit, setUnitPriceUnit] = useState('');
  const [finalPrice, setfinalPrice] = useState(0);
  const [allItems, setallItems] = useState([]);

  return (
    <>
      <FinalPrice
        finalPrice={finalPrice}
        setfinalPrice={setfinalPrice}
      />
      <Title />
      <AllItems
      allItems={allItems}
      />
      <AddItems
        itemName={itemName}
        setItemName={setItemName}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
        unitPrice={unitPrice}
        setUnitPrice={setUnitPrice}
        itemQuantityUnit={itemQuantityUnit}
        setItemQuantityUnit={setItemQuantityUnit}
        unitPriceUnit={unitPriceUnit}
        setUnitPriceUnit={setUnitPriceUnit}
        allItems={allItems}
        setallItems={setallItems}
      />
    </>
  );
}

export default App;
