import { useState } from "react";
import type {Person} from "./types/Person"
import PersonForm from "./components/Form/Person/PersonForm";

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);

  const addPerson = (name: string) => {
    const newPerson: Person = {
      id: crypto.randomUUID(),
      name,
    };

    setPeople((prevPeople) => [...prevPeople, newPerson]);
  };

  return (
    <>
      <PersonForm onAddPerson={addPerson}/>
    </>
  )
}