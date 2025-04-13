import React from 'react'
//component import
import ExpenseItem from './ExpenseItem'

const Table = ({ expenses}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {
                        ["Name", "Amount", "Date"].map((i, 
                            index) => (
                            <th key={index}>{i}</th>

                        ))
                    }

                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense)=> (
                        
                            <ExpenseItem key={expense.id} expense={expense}/> 
                        
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table