
# Altering Data in Server — Fullstackopen

## 1. REST i JSON Server

Zamiast pisać własny backend, w fazie developmentu możemy użyć `json-server`, który udostępnia prosty REST API na podstawie pliku `db.json`. Przykład zawartości:

```json
{
  "notes": [
    { "id": "1", "content": "HTML is easy", "important": true },
    { "id": "2", "content": "Browser can execute only JavaScript", "important": false }
  ]
}
```

Uruchomienie serwera:
```bash
npx json-server --port 3001 db.json
```

## 2. Tworzenie notatki (POST)

```js
const addNote = event => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() > 0.5
  }

  axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
}
```

**Wyjaśnienie:**  
- `event.preventDefault()` — zapobiega przeładowaniu strony po submitcie.
- `noteObject` — nowa notatka, generujemy losowo ważność.
- `axios.post(...)` — wysyła dane do serwera, backend doda ID.
- `response.data` — zawiera notatkę z ID.
- `setNotes(...concat(...))` — dodaje nową notatkę do listy (ważne: `concat` nie mutuje starej tablicy).
- `setNewNote('')` — czyści inputa.

## 3. Zmiana ważności (PUT)

W komponencie `Note`:

```jsx
const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
```

W komponencie `App`:

```js
const toggleImportanceOf = id => {
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }

  noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(n => n.id !== id ? n : returnedNote))
    })
}
```

**Wyjaśnienie:**  
- `find(...)` — znajdujemy notatkę po ID.
- `...note` — kopiujemy obiekt, zmieniamy ważność.
- `noteService.update(...)` — wysyła PUT z nową notatką.
- `setNotes(...map(...))` — aktualizujemy tylko jedną notatkę.

## 4. Wydzielenie logiki backendowej do serwisu

```js
// services/notes.js
import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => axios.get(baseUrl).then(res => res.data)
const create = newObject => axios.post(baseUrl, newObject).then(res => res.data)
const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject).then(res => res.data)

export default { getAll, create, update }
```

W `App.jsx` używamy:
```js
import noteService from './services/notes'

useEffect(() => {
  noteService.getAll().then(initialNotes => {
    setNotes(initialNotes)
  })
}, [])

const addNote = ... noteService.create(...)
const toggleImportanceOf = ... noteService.update(...)
```

## 5. Obsługa błędów

```js
noteService
  .update(id, changedNote)
  .then(...)
  .catch(error => {
    alert(`Note '${note.content}' was already deleted from server`)
    setNotes(notes.filter(n => n.id !== id))
  })
```

**Wyjaśnienie:**  
- `.catch(...)` — jeśli serwer zwróci błąd (np. 404), pokazujemy komunikat i usuwamy notatkę z UI.
