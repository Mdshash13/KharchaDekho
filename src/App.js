// import Expense_Item from "./components/Expense_Item";
import Expenses from "./components/Expenses";
// old projects used React syntax of React instead of JSX
// hence React was imported in every component
import React, { useState } from "react";
import New_Expense from "./components/New_Expense/New_Expense";

const expense_array = [
  {
    id: "d1",
    title: "Book",
    amount: 250,
    date: new Date(2022, 11, 25),
  },
  {
    id: "d2",
    title: "Car",
    amount: 2300,
    date: new Date(2022, 10, 25),
  },
  {
    id: "d3",
    title: "Clothes",
    amount: 5000,
    date: new Date(2022, 10, 5),
  },
  {
    id: "d4",
    title: "Fuel",
    amount: 2500,
    date: new Date(2022, 9, 25),
  },
];

function App() {
  const [expenses, set_expenses] = useState(expense_array);
  const expenseHandler = (expense) => {
    // console.log("In app");
    // console.log(expense);
    set_expenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  // alternative way of writing react code
  // without JSX format
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "To-do-list"),
  //   React.createElement(Expenses, { expense: expense_array })
  // );

  return (
    <div>
      <New_Expense onAddExpense={expenseHandler}></New_Expense>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;
