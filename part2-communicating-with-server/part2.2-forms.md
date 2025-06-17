
# 📝 React – Formularze i Kontrola Inputów (Forms & Controlled Components)

## 📥 Przechowywanie notatek w stanie komponentu

W aplikacji przechowujemy dane notatek w stanie za pomocą `useState`:

```jsx
const [notes, setNotes] = useState(props.notes)
```

Możemy też zacząć od pustej listy:

```jsx
const [notes, setNotes] = useState([])
```

## 📄 Dodawanie formularza do komponentu

Tworzymy formularz HTML z `onSubmit`, który obsługuje zdarzenie kliknięcia przycisku:

```jsx
<form onSubmit={addNote}>
  <input />
  <button type="submit">save</button>
</form>
```

Funkcja `addNote` zatrzymuje domyślne działanie formularza:

```jsx
const addNote = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
}
```

## 🎛️ Controlled Component – pełna kontrola nad inputem

Tworzymy osobny `useState` na wartość wpisywaną w formularzu:

```jsx
const [newNote, setNewNote] = useState('a new note...')
```

Przypisujemy inputowi `value` i `onChange`:

```jsx
<input value={newNote} onChange={handleNoteChange} />
```

Funkcja `handleNoteChange` aktualizuje stan:

```jsx
const handleNoteChange = (event) => {
  setNewNote(event.target.value)
}
```

## 🆕 Dodanie nowej notatki

Rozbudowujemy `addNote`, żeby tworzyć nowy obiekt i dodać go do listy:

```jsx
const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() < 0.5,
    id: String(notes.length + 1),
  }

  setNotes(notes.concat(noteObject))
  setNewNote('')
}
```

Używamy `concat()` zamiast `push()`, ponieważ `concat()` tworzy nową tablicę bez mutowania starej (zgodne z Reactem).

## 🔍 Filtrowanie notatek

Dodajemy możliwość filtrowania notatek wg pola `important`:

```jsx
const [showAll, setShowAll] = useState(true)

const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)
```

Przycisk zmieniający tryb:

```jsx
<button onClick={() => setShowAll(!showAll)}>
  show {showAll ? 'important' : 'all'}
</button>
```

## ❓ Operator warunkowy

Zamiast `if` można użyć `? :`:

```jsx
const label = note.important ? 'make not important' : 'make important'
```

## 🧪 Porównania

Zawsze używaj `===` (ścisłe porównanie), a nie `==`.

---

# 📒 Ćwiczenia 2.6–2.10 – Phonebook

## 2.6 – Dodanie osoby

- `useState` dla `persons` i `newName`
- kontrolowany `input`
- `event.preventDefault()` w `onSubmit`

## 2.7 – Sprawdzanie duplikatów

```js
if (persons.some(p => p.name === newName)) {
  alert(`${newName} is already added to phonebook`)
}
```

## 2.8 – Dodanie numeru telefonu

Dodaj drugie pole formularza (`newNumber`) i drugi handler.

## 2.9 – Filtrowanie listy osób

```js
const [filter, setFilter] = useState('')

const personsToShow = persons.filter(p =>
  p.name.toLowerCase().includes(filter.toLowerCase())
)
```

## 2.10 – Refaktoryzacja do komponentów

- `Filter`
- `PersonForm`
- `Persons`

Pamiętaj, żeby NIE definiować komponentów wewnątrz `App` – przenieś je do osobnych plików.

---

📌 _Opanowanie controlled components, zarządzania formularzem i filtrowania to fundament efektywnej pracy z React._
