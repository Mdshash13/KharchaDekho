import Expense_Date from "./Expense_Date";
// we will have to tell react starting module about this css file
// which needs to be incorporated
// so will import the css file here
import "./Expense_Item.css";
import Card from "./Card";
import React, { useState } from "react";

function Expense_Item(props) {
      // calling the useState function in component func
      // returns two items in an array
      // 1st- current state, 2nd- function to update current state
      
    //   const [title, setTitle] = useState(props.title);
    //   const clickHandler = () => {
        // setTitle('Changed!');
        // console.log(title);
//   };
  // no need of internal hard coding
  // i.e storing data in variables here
  // now we can interact with the app data using props
  // props is similar to parameters in JS
  // props is an object that stores data in key value pair
  // props helps component to interact and pass data
  // from one component to another component
  // now the data is fetched from outside the component

  return (
    <li>
    <Card className="expense-item">
      <Expense_Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}

// need to export it defaultly
export default Expense_Item;
