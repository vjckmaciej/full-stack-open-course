
# 📘 JavaScript – Podsumowanie Rozdziału (FullStackOpen)

## 🧠 Czego się uczysz?

Ten rozdział wprowadza Cię do **nowoczesnego JavaScriptu** z naciskiem na to, co jest faktycznie używane w React/Node. Pracujemy z wersją **ES6+** i unikamy starych podejść jak `var` czy klasyczne `this`.

---

## 🧱 Podstawy JavaScript

### 🔢 Zmienne

```js
const x = 1
let y = 5

y += 10
y = 'tekst'
x = 4 // błąd
```

- `const` – stała referencja (nie można przypisać nowej wartości)
- `let` – zmienna
- `var` – przestarzałe, nieużywane

---

### 📦 Tablice (Arrays)

```js
const t = [1, -1, 3]
t.push(5)

t.forEach(value => console.log(value))

const t2 = t.concat(10)

const m = t.map(v => v * 2)

const [first, second, ...rest] = t
```

- `push()` – modyfikuje oryginalną tablicę
- `concat()` – tworzy nową tablicę
- `map()` – transformuje elementy
- `forEach()` – iteracja po elementach
- Destrukturyzacja z `...rest`

---

## 🧍‍♂️ Obiekty

```js
const person = {
  name: 'Arto Hellas',
  age: 35
}

console.log(person.name)
console.log(person['age'])

person.address = 'Helsinki'
person['secret number'] = 12341
```

- Dostęp przez `.` i `[]`
- Można dynamicznie dodawać właściwości
- Właściwości mogą być dowolnego typu

---

## 🧮 Funkcje

### Strzałkowe (arrow functions)

```js
const sum = (a, b) => a + b
const square = x => x * x
```

- Brak własnego `this`
- Krótsza składnia
- Idealne do `map`, `forEach`, `reduce` itd.

---

## 🧱 Klasy w JavaScript

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam', 29)
adam.greet()
```

- Klasy wprowadzone w **ES6 (2015)** to tylko **syntactic sugar** – pod spodem nadal działa **prototypowe dziedziczenie**
- Konstruktor działa jak w Javie/C#: przypisuje pola obiektu
- `this` wskazuje na konkretną instancję klasy
- Klasy są używane w starszym kodzie Reacta lub w Node.js

**Uwaga:** mimo podobieństw do Javy, klasy w JS to po prostu obiekty (`typeof === "object"`), nie pełnoprawne klasy OOP.

