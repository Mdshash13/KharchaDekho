import "./Expense_Form.css";
import React, { useState } from "react";

const Expense_Form = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const changeAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // function to handle data after submission
    const submitHandler = (event) => {
           event.preventDefault();

           const expenseFormData = {
              title : enteredTitle,
              amount : +enteredAmount,
              date : new Date(enteredDate)
           };
        //    console.log(expenseFormData)
              props.onSaveExpenseData(expenseFormData);
           setEnteredTitle('');
           setEnteredAmount('');
           setEnteredDate('');
    };

   return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" value={enteredTitle} onChange={changeTitleHandler}/>
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" value={enteredAmount}step=".01" min=".01" onChange={changeAmountHandler}/>
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input value={enteredDate} type="date" min="2022-01-01" max="2024-12-31" onChange={changeDateHandler}/>
        </div>
      </div>
        <div className="new-expense__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add to List</button>
        </div>
    </form>
  );
};

export default Expense_Form;
