//rrd imports
import { Form, Link } from "react-router-dom";

//helper functions
import { calculateSpentByBudget, formatCurrency } from "../helpers";

//library imports
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  const remaining = amount - spent;

  return (
    <div className="budget-item" style={{ "--accent": color }}>
      <div className="budget-header">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}></progress>
      <div className="budget-stats">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(remaining)} remaining</small>
      </div>
      {
        showDelete ? (
          <div className="flex-sm">
          <Form
  method="post"
  action="delete"
  onSubmit={(event) => {
    if (
      !confirm("Are you sure you want to permanently delete this budget?")
    ) {
      event.preventDefault();
    }
  }}
>
  <button type="submit" className="btn">
    <span>Delete Budget</span>
    <TrashIcon width={20} />
  </button>
</Form>
          </div>
        ) : (
          <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
          <span>View Details</span>
          <BanknotesIcon width={20} />
          </Link>
          </div>
        )
      }
    </div>
  );
};

export default BudgetItem;
