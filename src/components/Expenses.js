import "./Expenses.css";
import Expense_Item from "./Expense_Item";
import Card from "./Card";
import Expense_Filter from "./Expense_Filter";
import React, { useState } from "react";
import Expense_List from "./Expense_List";
import ExpensesChart from "./Expense_Chart";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2021");

  const dropdownChangeHandler = (selectedYear) => {
    // console.log('App');
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expense.filter((expense_new) => {
    return expense_new.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <Expense_Filter
          selected={filteredYear}
          onChangeFilter={dropdownChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <Expense_List expense={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
