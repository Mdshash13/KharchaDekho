import './New_Expense.css';
import React, { useState } from 'react';
import Expense_Form from './Expense_Form';

const New_Expense = (props) => {

    const [isEdit, setIsEdit] = useState(false);
    const isEditHandler = () => {
          setIsEdit(true);
    };

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
          const expense_Data = {
            // pulling out all key-value pairs entered expense data from Expense_Form
              ...enteredExpenseData,
            // entering a new id key in the expense data
            id : Math.random().toString()
          };
          props.onAddExpense(expense_Data);
          setIsEdit(false);
    };

    const stopEditHandler = () => {
          setIsEdit(false);
    };
    return (<div className="new-expense">

        {!isEdit && <button onClick={isEditHandler}>Add a New Expense.</button>}
        {isEdit && <Expense_Form onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={stopEditHandler}/>}
    </div>
    );
}

export default New_Expense;