
# Dodawanie stylów i obsługa błędów w aplikacji React

## Stylowanie komponentów

Na początek dodajemy arkusz stylów `index.css` do folderu `src`, a następnie importujemy go w `main.jsx`:

```js
import './index.css';
```

To sprawia, że style zostają załadowane do aplikacji.

### Przykład stylu

W `index.css` dodajemy:

```css
h1 {
  color: green;
  font-style: italic;
}
```

Oznacza to: wszystkie nagłówki `<h1>` będą zielone i pochylone (italic).

---

## Stylowanie elementów listy (`<li>`)

W komponencie `Note`:

```jsx
const Note = ({ note, toggleImportance }) => {
  const label = note.important 
    ? 'make not important' 
    : 'make important';

  return (
    <li className='note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
}
```

- `className='note'` – przypisuje klasę CSS `note` do elementu `<li>`, co umożliwia precyzyjne stylowanie.

W `index.css`:

```css
.note {
  color: grey;
  padding-top: 5px;
  font-size: 15px;
}
```

---

## Obsługa komunikatów o błędach

Tworzymy komponent `Notification`:

```jsx
const Notification = ({ message }) => {
  if (message === null) return null;

  return (
    <div className="error">
      {message}
    </div>
  );
};
```

Jeśli `message` to `null`, nie pokazujemy nic. W przeciwnym wypadku renderujemy `<div>` z klasą `error`.

W `index.css`:

```css
.error {
  color: red;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
```

---

## Użycie komponentu `Notification` i obsługa błędów

W komponencie `App`:

```jsx
const [errorMessage, setErrorMessage] = useState('some error happened...');
```

Dodajemy komunikat do UI:

```jsx
<Notification message={errorMessage} />
```

Zmiana logiki przy błędzie:

```jsx
const toggleImportanceOf = id => {
  const note = notes.find(n => n.id === id);
  const changedNote = { ...note, important: !note.important };

  noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(n => n.id !== id ? n : returnedNote));
    })
    .catch(error => {
      setErrorMessage(`Note '${note.content}' was already removed from server`);
      setTimeout(() => setErrorMessage(null), 5000);
      setNotes(notes.filter(n => n.id !== id));
    });
};
```

- Jeśli backend zgłasza błąd (np. brak notatki), wyświetlamy komunikat na 5 sekund i usuwamy notatkę lokalnie.

---

## Style inline w React

Dodajemy komponent `Footer.jsx`:

```jsx
const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic'
  };

  return (
    <div style={footerStyle}>
      <br />
      <p>
        Note app, Department of Computer Science, University of Helsinki 2025
      </p>
    </div>
  );
};
```

Importujemy w `App.jsx` i dodajemy do JSX `<Footer />`.

---

## Inicjalizacja stanu jako `null` vs `[]`

Jeśli zamiast:

```js
const [notes, setNotes] = useState([]);
```

zrobimy:

```js
const [notes, setNotes] = useState(null);
```

to przy pierwszym renderze `notes.map(...)` zwróci błąd (bo `null.map` nie istnieje).

Rozwiązania:
1. Inicjalizuj `notes` pustą tablicą.
2. Albo użyj warunku:

```jsx
if (!notes) return null;
```

---

## Zależności `useEffect`

Jeśli efekt ma wykonać się tylko raz – dajemy pustą tablicę `[]` jako drugi argument:

```js
useEffect(() => {
  noteService.getAll().then(initialNotes => setNotes(initialNotes));
}, []);
```

Jeśli ma reagować np. na zmianę `currency`:

```js
useEffect(() => {
  if (currency) {
    axios.get(...).then(...);
  }
}, [currency]);
```

---

## Podsumowanie

- Używaj klas CSS do stylowania komponentów – bardziej elastyczne niż selektory `li`, `h1`.
- Komponent `Notification` pomaga oddzielić logikę UI błędów od reszty kodu.
- Używaj `useEffect` do ładowania danych i reagowania na zmiany.
- Unikaj błędów typu `null.map` przez właściwą inicjalizację stanu lub renderowanie warunkowe.
