import type { Person } from '../../../types/Person';
import './styles.css';

interface PeopleListProps {
  people: Person[];
  onRemovePerson: (id: string) => void;
}

function PeopleList({ people, onRemovePerson }: PeopleListProps) {
  return (
    <div className="people-list">
      {people.map((person) => (
        <div className="person-row" key={person.id}>
          <span>{person.name}</span>

          <button onClick={() => onRemovePerson(person.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default PeopleList;
