//rrd imports
import { useLoaderData } from "react-router-dom";
//helpers
import { fetchData } from "../helpers";
//component imports
import Table from "../components/Table";

//loader
export function expensesLoader(){
    const expenses = fetchData("expenses");
    return { expenses }
}

const ExpensesPage = () => {
    const { expenses } = useLoaderData();
  return (
  <div className="grid-lg">
    <h1>ALL Expenses</h1>
    {expenses && expenses.length > 0 ? (
      <div className="grid-md">
        <h2>
          Recent Expenses <small>({expenses.length} total)</small>
        </h2>
        <Table 
        expenses={expenses.sort((a, b) => b.createdAt - a.createdAt)} />
      </div>
    ) : (
      <p>No Expenses to show</p>
    )}
  </div>
  );
}

export default ExpensesPage;