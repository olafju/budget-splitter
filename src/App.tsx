import { useState } from 'react';
import type { Person } from './types/Person';
import type { Expense } from './types/Expense';
import PersonForm from './components/Form/Person/PersonForm';
import PeopleList from './components/List/People/PeopleList';
import ExpenseForm from './components/Form/Expense/ExpenseForm';
import ExpenseList from './components/List/Expenses/ExpenseList';
import SettlementList from './components/List/Settlements/SettlementList';
import { calculateSettlements } from './utils/calculateSettlements';

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const settlements = calculateSettlements(people, expenses);

  const addPerson = (name: string) => {
    const newPerson: Person = {
      id: crypto.randomUUID(),
      name,
    };

    setPeople((prevPeople) => [...prevPeople, newPerson]);
  };

  const removePerson = (id: string) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  const addExpense = (description: string, amount: number, paidById: string) => {
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      description,
      amount,
      paidById,
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const removeExpense = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <main className="app">
      <header className="app-header">
        <h1>Budget Splitter</h1>
        <p>Split shared expenses quickly and easily.</p>
      </header>

      <div className="dashboard">
        <section className="panel">
          <h2>Participants</h2>

          <PersonForm onAddPerson={addPerson} />

          <PeopleList people={people} onRemovePerson={removePerson} />
        </section>

        <section className="panel">
          <h2>Expenses</h2>

          <ExpenseForm people={people} onAddExpense={addExpense} />

          <ExpenseList expenses={expenses} people={people} onRemoveExpense={removeExpense} />
        </section>

        <section className="panel settlements-panel">
          <h2>Settlements</h2>

          <SettlementList settlements={settlements} />
        </section>
      </div>
    </main>
  );
}
