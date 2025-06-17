
# 📘 React – Rendering Collections & Modules (Podsumowanie)

## 🐛 Debugowanie: console.log

- Różnica między juniorem a seniorem? Senior loguje 10x częściej.
- Nie używaj `+` przy logowaniu obiektów:
  ```js
  console.log('props value is', props) // ✅
  console.log('props value is ' + props) // ❌ [object Object]
  ```

## ⚙️ Snippety w VS Code

- Przykład snippetu dla `console.log`:
  ```json
  {
    "console.log": {
      "prefix": "clog",
      "body": ["console.log('$1')"]
    }
  }
  ```

## 🧠 JavaScript Arrays – `map`, `filter`, `find`

- Używamy ich _wszędzie_ w React.
- `map()` – tworzy nową tablicę, np. do renderowania elementów JSX:
  ```jsx
  notes.map(note => <li key={note.id}>{note.content}</li>)
  ```

## 🧰 Rendering Collections

- Zamiast:
  ```jsx
  <li>{notes[0].content}</li>
  ```
  użyj:
  ```jsx
  {notes.map(note =>
    <li key={note.id}>{note.content}</li>
  )}
  ```

- Używaj `key={note.id}` – nie indeksu tablicy!

## 🧼 Refaktoryzacja: komponenty i moduły

- Komponent `Note`:
  ```jsx
  const Note = ({ note }) => <li>{note.content}</li>
  ```

- W `App.jsx`:
  ```jsx
  import Note from './components/Note'

  const App = ({ notes }) => (
    <ul>{notes.map(note => <Note key={note.id} note={note} />)}</ul>
  )
  ```

- Umieszczaj komponenty w `src/components/` jako osobne moduły.

## 🧨 Gdy aplikacja się sypie (React Explosion)

- Używaj `console.log()` na różnych poziomach komponentów.
- Gdy destrukturyzacja propsów się wywala – loguj cały `props`.

## 📜 Web developer’s oath

- Zawsze otwarta konsola przeglądarki.
- Kodujesz małymi krokami.
- Jeśli coś nie działa – nie dopisuj kodu, tylko usuwaj aż zadziała.
- Pytając o pomoc – zadawaj dobre pytania.

## 🧪 Ćwiczenia 2.1 – 2.5

- **2.1**: Przepisz aplikację z części 1, renderuj dane z obiektu `course`.
- **2.2**: Dodaj sumę ćwiczeń (reduce).
- **2.3**: Użyj `reduce()` do sumowania ćwiczeń:
  ```js
  parts.reduce((sum, part) => sum + part.exercises, 0)
  ```
- **2.4**: Obsłuż wiele kursów.
- **2.5**: Przenieś `Course` do osobnego modułu.

---

🧠 _Zrozumienie map(), destrukturyzacji i podziału kodu na komponenty to fundament dalszej nauki Reacta._
