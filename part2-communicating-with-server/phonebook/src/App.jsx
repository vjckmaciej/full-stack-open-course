import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PhonebookHeader from "./components/PhonebookHeader";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addNumber = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const exists = persons.some((person) => person.name === newName);
    if (exists) {
      alert(newName + " is already added to phonebook");
      return;
    } else {
      phonebookService.create(newPerson).then((returnedNumber) => {
        setPersons(persons.concat(returnedNumber));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <PhonebookHeader />
      <PersonForm
        addNumber={addNumber}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
