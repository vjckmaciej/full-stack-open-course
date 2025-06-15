# 📘 Notatka: Introduction to React

## 🧠 Cel rozdziału

W tym rozdziale zapoznałem się z podstawami biblioteki React:

- jak tworzyć prostą aplikację
- czym są komponenty
- jak działa JSX
- jak przekazuje się dane do komponentów (propsy)
- jak React renderuje komponenty do DOM
- jak czytać błędy
- jak używać konsoli
- jak wygląda dobra praktyka programowania w React

---

## 🚀 Tworzenie projektu z Vite

Najłatwiejszy sposób na rozpoczęcie pracy z Reactem to użycie **Vite** – nowoczesnego bundlera, który tworzy gotowy szkielet aplikacji.

### 📦 Kroki:

1. **Stwórz projekt:**

   ```bash
   npm create vite@latest introdemo -- --template react
   cd introdemo
   npm install
Uruchom aplikację:

bash
Kopiuj
Edytuj
npm run dev
Aplikacja otwiera się w przeglądarce pod http://localhost:5173

📁 Struktura plików
Główna logika znajduje się w src/

Najważniejsze pliki: main.jsx (punkt wejścia), App.jsx (komponent główny)

Można usunąć niepotrzebne pliki: App.css, index.css, folder assets

⚛️ Komponenty w React
Komponent w React to funkcja JS zwracająca JSX (czyli „HTML w JS”):

jsx
Kopiuj
Edytuj
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
Ten komponent wyświetli <p>Hello world</p> na stronie.

🧠 Jak działa renderowanie?
W main.jsx:

jsx
Kopiuj
Edytuj
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
Ten kod mówi: „renderuj komponent App wewnątrz elementu <div id="root"> znajdującego się w index.html”.

📜 JSX – czyli nie HTML
Chociaż JSX wygląda jak HTML, jest to tak naprawdę składnia JavaScriptu.

JSX jest kompilowany do React.createElement(...)

JSX musi mieć jeden element główny

Tag br musi wyglądać tak: <br />

W JSX można używać {} do wstawiania zmiennych i wyrażeń:

jsx
Kopiuj
Edytuj
const now = new Date()
<p>Today is {now.toString()}</p>
🔍 Konsola to Twój przyjaciel
js
Kopiuj
Edytuj
console.log('Hello from component')
Ważna zasada:

Zawsze trzymaj otwartą konsolę przeglądarki, kiedy tworzysz aplikację webową.

W konsoli widać błędy, logi, ostrzeżenia i dane – to najważniejsze narzędzie debugowania.

🧩 Komponenty wewnątrz komponentów
Komponenty można definiować wewnątrz innych komponentów:

jsx
Kopiuj
Edytuj
const Hello = () => {
  return (
    <p>Hello world</p>
  )
}

const App = () => {
  return (
    <div>
      <Hello />
    </div>
  )
}
Można je również powielać:

jsx
Kopiuj
Edytuj
<Hello />
<Hello />
<Hello />
📤 Props – przekazywanie danych do komponentów
Propsy to sposób przekazywania danych „z góry w dół” (z komponentu nadrzędnego do podrzędnego):

jsx
Kopiuj
Edytuj
const Hello = (props) => {
  return <p>Hello {props.name}</p>
}

<Hello name="Maya" />
<Hello name="George" />
Props to zwykły obiekt:

js
Kopiuj
Edytuj
props = { name: "Maya" }
Można też przekazywać dane jako wyrażenia JS:

jsx
Kopiuj
Edytuj
const name = "Peter"
const age = 10

<Hello name={name} age={age} />
<Hello name="Maya" age={26 + 10} />
Wewnątrz komponentu:

jsx
Kopiuj
Edytuj
<p>Hello {props.name}, you are {props.age} years old</p>
📛 Błędy i zasady dobrej praktyki
Komponenty muszą zaczynać się wielką literą:

Footer ✅

footer ❌ (React potraktuje to jako HTML <footer>)

JSX musi mieć jeden element główny – np. div lub fragment (<> ... </>)

Nie próbuj renderować obiektów bezpośrednio:

jsx
Kopiuj
Edytuj
const friend = { name: "Maya", age: 10 }
<p>{friend}</p> // ❌ Błąd
<p>{friend.name} {friend.age}</p> // ✅
Tablice stringów są OK:

jsx
Kopiuj
Edytuj
const friends = ["Peter", "Maya"]
<p>{friends}</p> // "Peter,Maya"
🛠️ Refaktoryzacja aplikacji (Course Info)
Początkowo wszystko jest w App:
jsx
Kopiuj
Edytuj
<h1>{course}</h1>
<p>{part1} {exercises1}</p>
...
Refaktoryzujemy do 3 komponentów:
jsx
Kopiuj
Edytuj
<Header course={course} />
<Content ... />
<Total ... />
Każdy z komponentów otrzymuje dane przez propsy.
Np.:

jsx
Kopiuj
Edytuj
const Header = ({ course }) => <h1>{course}</h1>
📣 Cytaty z rozdziału
"I promise to keep the console open all the time during this course, and for the rest of my life when I'm doing web development."

"The only way to go fast, is to go well." – Uncle Bob