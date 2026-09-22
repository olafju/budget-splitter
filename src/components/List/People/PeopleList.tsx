import type { Person } from '../../../types/Person';

interface PeopleListProps {
  people: Person[];
  onRemovePerson: (id: string) => void;
}

function PeopleList({ people, onRemovePerson }: PeopleListProps) {
  return (
    <>
      <ul>
        {people.map((person) => (
          <>
            <li key={person.id}>{person.name}</li>
            <button onClick={() => onRemovePerson(person.id)}> Remove </button>
          </>
        ))}
      </ul>
    </>
  );
}

export default PeopleList;
