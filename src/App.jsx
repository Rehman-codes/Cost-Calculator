import { useState } from 'react';
import './App.css';
import FinalPrice from './components/finalPrice/FinalPrice';
import Title from './components/title/Title';
import AllItems from './components/allItems/AllItems';
import AddItems from './components/addItem/AddItem';

function App() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [itemQuantityUnit, setItemQuantityUnit] = useState('');
  const [unitPriceUnit, setUnitPriceUnit] = useState('');
  const [finalPrice, setfinalPrice] = useState(0);
  const [allItems, setallItems] = useState([]);
  const [singleItemPrice, setSingleItemPrice] = useState(0);

  return (
    <>
      <FinalPrice
        finalPrice={finalPrice}
      />
      <Title />
      <AllItems
        allItems={allItems}
        setallItems={setallItems}
        finalPrice={finalPrice}
        setfinalPrice={setfinalPrice}
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
        finalPrice={finalPrice}
        setfinalPrice={setfinalPrice}
        singleItemPrice={singleItemPrice}
        setSingleItemPrice={setSingleItemPrice}
      />
    </>
  );
}

export default App;
