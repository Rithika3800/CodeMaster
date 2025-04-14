import { calculateSpentByBudget, formatCurrency } from "../helpers";

const BudgetItem = ({ budget }) => {
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
    </div>
  );
};

export default BudgetItem;
