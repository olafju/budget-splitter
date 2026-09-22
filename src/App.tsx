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
    <>
      <PersonForm onAddPerson={addPerson} />
      <PeopleList people={people} onRemovePerson={removePerson} />
      <ExpenseForm people={people} onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} people={people} onRemoveExpense={removeExpense} />
      <SettlementList settlements={settlements} />
    </>
  );
}
