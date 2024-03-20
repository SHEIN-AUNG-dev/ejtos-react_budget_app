import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget ,dispatch ,currency,expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const handleBudgetChange = (event) => {
        let user_budget = event.target.value;
        if (user_budget>=totalExpenses){
            if (user_budget<=20000)
        {
        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        }
        else{
            alert("Please enter value less than 20,000!")
        }

        }
        else{
            alert ("You cannot reduce budget value lower than the spending")
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;