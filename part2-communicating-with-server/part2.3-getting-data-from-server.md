
# 📡 React – Getting Data from Server & Effect Hooks

## 🌐 JSON Server – szybki backend do dev

- Tworzymy plik `db.json` z danymi:
```json
{
  "notes": [
    { "id": "1", "content": "HTML is easy", "important": true },
    { "id": "2", "content": "Browser can execute only JavaScript", "important": false },
    { "id": "3", "content": "GET and POST are the most important methods of HTTP protocol", "important": true }
  ]
}
```

- Startujemy backend lokalny:
```bash
npx json-server --port 3001 db.json
```

### 🔁 JSON Server symuluje backend REST-owy
- Działa na `http://localhost:3001/notes`
- Dane przechowywane są w pliku, nie w DB

---

## 📦 npm + axios

- Instalacja axios:
```bash
npm install axios
```

- Dodanie json-server do dev dependencies:
```bash
npm install json-server --save-dev
```

- W `package.json`, nowy skrypt:
```json
"scripts": {
  "server": "json-server -p 3001 db.json"
}
```

---

## 🧵 Asynchroniczność i Promisy

### Przestarzały XHR:
```js
const xhttp = new XMLHttpRequest()
// nie używać — event-based, nieprzyjazne
```

### ✅ Promisy z `fetch` lub `axios`:
```js
axios.get('http://localhost:3001/notes')
  .then(response => {
    console.log(response.data)
  })
```

- `.then()` rejestruje callback do wykonania po zakończeniu żądania

---

## ⚛️ useEffect – hook do efektów ubocznych

- `useEffect()` odpala kod po renderze komponentu
- Idealny do fetchowania danych z serwera

### 👇 Przykład integracji w komponencie App

```js
const [notes, setNotes] = useState([])

useEffect(() => {
  console.log('effect')

  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
}, [])
```

### 🧠 Uwaga:
- `[]` jako drugi argument = efekt tylko przy pierwszym renderze
- Jeśli zapomnisz `[]`, fetch odpali się przy każdej zmianie stanu

---

## 🧪 Co się dzieje po kolei?

1. Komponent się renderuje → `render 0 notes`
2. React odpala `useEffect` → `effect`
3. Axios robi request
4. Gdy dane przychodzą → `promise fulfilled`
5. `setNotes(...)` aktualizuje stan → komponent się rerenderuje
6. Widzimy dane na ekranie

---

## 🛠️ Refaktoryzacja main.jsx

Z:
```js
axios.get(...).then(response => {
  ReactDOM.render(<App notes={...} />)
})
```

Na:
```js
ReactDOM.render(<App />) // dane pobierane wewnątrz App przez useEffect
```

---

## ☎️ Ćwiczenie 2.11: Phonebook – initial data z serwera

1. Zapisz dane w `db.json`:
```json
{
  "persons":[
    { "name": "Arto Hellas", "number": "040-123456", "id": "1" },
    { "name": "Ada Lovelace", "number": "39-44-5323523", "id": "2" },
    ...
  ]
}
```

2. Uruchom `json-server`:
```bash
npm run server
```

3. W `App.jsx` pobierz dane:

```js
useEffect(() => {
  axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
}, [])
```

---

🔚 _Zrozumienie `useEffect`, `axios`, i modelu asynchronicznego JS to absolutny fundament dla Reacta z backendem._
