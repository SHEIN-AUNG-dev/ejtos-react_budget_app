import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget ,expenses ,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
     
        let limitbudget = event.target.value;
        if (limitbudget>20001)
        {
            alert ("Budget cannot exceed more than 20,000");
        }
        else if (limitbudget<totalExpenses)
        {
            alert ("You cannot reduce the budget value lower than the spending");
        }
        else{
            setNewBudget(event.target.value);
        }
        
       
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
