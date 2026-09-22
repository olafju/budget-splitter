import type { Person } from '../../../types/Person';
import type { Expense } from '../../../types/Expense';
import './styles.css';

interface ExpenseListProps {
  expenses: Expense[];
  people: Person[];
  onRemoveExpense: (id: string) => void;
}

function ExpenseList({ expenses, people, onRemoveExpense }: ExpenseListProps) {
  return (
    <ul className="expense-list">
      {expenses.map((expense) => {
        const payer = people.find((person) => person.id === expense.paidById);

        return (
          <div className="expense-row" key={expense.id}>
            <li>
              <strong>{expense.description}</strong>
              <span>
                {expense.amount} zł · paid by {payer?.name}
              </span>
            </li>

            <button onClick={() => onRemoveExpense(expense.id)}>Remove</button>
          </div>
        );
      })}
    </ul>
  );
}

export default ExpenseList;
