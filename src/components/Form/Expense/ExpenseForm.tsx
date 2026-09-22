import { useState, type SubmitEvent } from 'react';
import type { Person } from '../../../types/Person';
import "./styles.css";

interface ExpenseFormProps {
  people: Person[];
  onAddExpense: (description: string, amount: number, paidById: string) => void;
}

function ExpenseForm({ people, onAddExpense }: ExpenseFormProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidById, setPaidById] = useState('');

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const numericAmount = Number(amount);

    if (!description.trim() || numericAmount <= 0 || !paidById) {
      return;
    }

    onAddExpense(description.trim(), numericAmount, paidById);
  };

  return (
    <form className='expense-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <select value={paidById} onChange={(event) => setPaidById(event.target.value)}>
        <option value="">Select payer</option>
        {people.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>

      <button type="submit">Add expense</button>
    </form>
  );
}

export default ExpenseForm;
