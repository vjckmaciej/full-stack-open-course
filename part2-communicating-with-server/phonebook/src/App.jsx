import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PhonebookHeader from "./components/PhonebookHeader";
import phonebookService from "./services/phonebook";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [createdMessage, setCreatedMessage] = useState(null)
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    phonebookService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addNumber = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const exists = persons.some((person) => person.name === newName);
    const existingPerson = persons.find((person) => person.name === newName);

    if (exists) {
      if (
        window.confirm(
          newName +
            " is already added to phonebook, replace the old number with a new one?"
        )
      ) {
        phonebookService
          .update(existingPerson.id, newPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? returnedPerson : person
              )
            );
          })
          .catch(error => {
            setMessageType('error')
            setCreatedMessage(`Information of ${newPerson.name} has already been removed`)
            setTimeout(() => {
              setCreatedMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          });
      }
    } else {
      phonebookService.create(newPerson).then((returnedNumber) => {
        setMessageType('success')
        setCreatedMessage(
          `Added ${newPerson.name}`
        );
        setTimeout(() => {
          setCreatedMessage(null);
        }, 5000);
        setPersons(persons.concat(returnedNumber));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch(() => {
          alert(`Information of ${name} has already been removed from server`);
          setPersons(persons.filter((person) => person.id !== id));
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
      <Notification message={createdMessage} type={messageType} />
      <PersonForm
        addNumber={addNumber}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
