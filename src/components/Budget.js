import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,totalExpenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("The budget cannot exceed £20,000");
        } else if( event.target.value < totalExpenses){
            alert("The budget cannot fall below total expenses.");
        }else{
            setNewBudget(event.target.value);

        }


    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" max="20000" min={totalExpenses} value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
