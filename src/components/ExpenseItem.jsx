import React from 'react'
import { formatCurrency, formatDateToLocaleString } from '../helpers'

const ExpenseItem = ({ expense }) => {
  return (
    <tr>
        <td>{expense.name}</td>
        <td>{formatCurrency(expense.amount)}</td>
        <td>{formatDateToLocaleString(expense.createdAt)}</td>
    </tr>
  );
};

export default ExpenseItem;