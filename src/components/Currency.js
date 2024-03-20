import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch,currency } = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
        console.log(newCurrency);
       
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

  
    return (
<div className='alert alert-secondary '>
    <select className="form-select bg-success text-white "id="inputGroupSelect03" onChange={handleCurrencyChange}>
        <option defaultValue value="£" name="Pound">Currency(£ Pound)</option>
        <option value="$" name="Pound">Currency($ Dollar)</option>
        <option value="€" name="Euro">Currency(€ Euro)</option>
        <option value="₹" name="Ruppee">Currency(₹ Ruppee)</option>
    </select>
</div>

    );
};
export default Currency;