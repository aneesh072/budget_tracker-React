import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 123, name: 'Shopping', cost: 50 },
    { id: 124, name: 'Grocery', cost: 60 },
    { id: 125, name: 'Holiday', cost: 300 },
    { id: 125, name: 'Transport', cost: 30 },
    { id: 125, name: 'Utility', cost: 100 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
