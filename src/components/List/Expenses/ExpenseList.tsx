import type { Person } from '../../../types/Person';
import type { Expense } from '../../../types/Expense';

interface ExpenseListProps {
  expenses: Expense[];
  people: Person[];
  onRemoveExpense: (id: string) => void;
}

function ExpenseList({ expenses, people, onRemoveExpense }: ExpenseListProps) {
  return (
    <ul>
      {expenses.map((expense) => {
        const payer = people.find((person) => person.id === expense.paidById);

        return (
          <>
            <li key={expense.id}>
              {expense.description} - {expense.amount} zł - paid by {payer?.name}
            </li>
            <button onClick={() => onRemoveExpense(expense.id)}>Remove</button>
          </>
        );
      })}
    </ul>
  );
}

export default ExpenseList;
