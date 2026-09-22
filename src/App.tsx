import { useState } from "react";
import type {Person} from "./types/Person"
import PersonForm from "./components/Form/Person/PersonForm";
import PeopleList from "./components/List/People/PeopleList";

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);

  const addPerson = (name: string) => {
    const newPerson: Person = {
      id: crypto.randomUUID(),
      name,
    };

    setPeople((prevPeople) => [...prevPeople, newPerson]);
  };

  const removePerson = (id: string) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  }

  return (
    <>
      <PersonForm onAddPerson={addPerson}/>
      <PeopleList people={people} onRemovePerson={removePerson}/>
    </>
  )
}