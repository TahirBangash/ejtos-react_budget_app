import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown=()=>{
    const { dispatch } = useContext(AppContext);


    const [selectedOption, setSelectedOption] = useState('dollar');


    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    
        let symbol;
        switch (value) {
            case 'dollar':
                symbol = '$';
                break;
            case 'pound':
                symbol = '£';
                break;
            case 'euro':
                symbol = '€';
                break;
            case 'rupee':
                symbol = '₹';
                break;
            default:
                symbol = '$';
        }
        dispatch({ type: 'CHANGE_CURRENCY', payload: symbol });
    };

    return (
        <select value={selectedOption} onChange={handleSelectChange}>
            <option value="dollar">$ Dollar</option>
            <option value="pound">£ Pound</option>
            <option value="euro">€ Euro</option>
            <option value="rupee">₹ Ruppee.</option>
        </select>
    );
}

export default CurrencyDropdown;
