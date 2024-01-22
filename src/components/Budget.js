import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);
    const { currencySymbol } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value <=2000){
            setNewBudget(event.target.value);
            dispatch({ type: 'CHANGE_BUDGET', payload: event.target.value });
        }
        else{
            alert("Warning: the budget can not excede 2000");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currencySymbol}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
