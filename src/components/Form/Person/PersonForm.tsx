import { useState, type SubmitEvent } from "react";
import "./styles.css"

interface PersonFormProps {
    onAddPerson: (name: string) => void;
}

function PersonForm({onAddPerson}: PersonFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!name.trim()) return;

    onAddPerson(name.trim());
    setName("");
  }

  return (
    <form className="person-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter person's name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Add person</button>
    </form>
  );
}

export default PersonForm;
