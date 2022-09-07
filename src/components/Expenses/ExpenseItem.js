import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 3, 8);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 550.60;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>

          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
