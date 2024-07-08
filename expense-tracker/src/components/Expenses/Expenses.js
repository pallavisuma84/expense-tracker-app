import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  let filteredExpensesArray = props.expenses.filter(
    (items) => items.date.getFullYear().toString() === filteredYear
  );

  const filterChangedHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
        expenseObj={props.expenses}
      />
      {/* ALTERNATIVE 1: using ternary operator to check expenses length */}
      {/* {filteredExpensesArray.length === 0 ? (
        <p>No Matches found</p>
      ) : (
        filteredExpensesArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* //ALTERNATIVE-2 : using &&  */}
      {/* {filteredExpensesArray.length === 0 && <p>No match found</p>}
      {filteredExpensesArray.length > 0 &&
        filteredExpensesArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      {/* -------------------------------------------------------------------------- */}
      <ExpensesChart expenses={filteredExpensesArray} />
      {/* ALTERNATIVE 3: using variable to store element  */}
      <ExpensesList items={filteredExpensesArray} />
    </Card>
  );
};

export default Expenses;
