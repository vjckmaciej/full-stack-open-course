# 📘 Promisy w JavaScript – prosty poradnik dla Juniora

## 🧠 Co to jest `Promise`?

`Promise` to **obietnica**, że jakaś **operacja asynchroniczna** (np. pobranie danych z serwera) **zakończy się sukcesem albo błędem**.

Promise:
- ma 3 stany:
  - ⏳ `pending` – trwa operacja,
  - ✅ `fulfilled` – zakończona sukcesem,
  - ❌ `rejected` – zakończona błędem.

## 🛠️ Dlaczego warto używać Promisów?

Dzięki nim:
- łatwiej zarządzać kodem asynchronicznym (np. `fetch`, `setTimeout`, API),
- unikamy tzw. *callback hell* (piekła zagnieżdżeń).

## 🔗 Podstawowa składnia

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Błąd:", error));
```

## 🪄 `async` / `await` – nowocześniejsze podejście

```js
const loadData = async () => {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Wystąpił błąd:", err);
  }
};
```

## ⛓️ Łańcuchy Promisów (Promise Chaining)

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log("Got:", finalResult);
  })
  .catch((err) => console.error("Błąd:", err));
```

Każdy `.then()` zwraca **nowego Promisa**, więc można łańcuchować kroki.

## ⚠️ Częste błędy

```js
// Błąd – brak return:
doSomething()
  .then((url) => {
    fetch(url); // brak return => kolejny .then dostanie undefined
  });

// Poprawnie:
doSomething()
  .then((url) => {
    return fetch(url); // teraz wszystko działa
  });
```

## 🧪 Kiedy używamy `Promise`?

- `fetch`, `axios`, `setTimeout`, `setInterval`
- operacje na plikach, bazach danych, API
- w React – np. w `useEffect`

## 🧼 Dobre praktyki

- Zawsze `catch()` na końcu.
- Nie mieszaj `then()` i `await` razem.
- W React – używaj `useEffect` i `useState`.

## 🎓 Podsumowanie

`Promise` to sposób, żeby **ładnie obsługiwać kod asynchroniczny**, zamiast pakować callbacki w callbacki. Każdy `Promise` daje Ci `then()` (sukces), `catch()` (błąd), i `finally()` (zawsze).

Jeśli ogarniasz `fetch`, `.then()`, `async/await` i `useEffect` w React – ogarniasz 90% zastosowań Promise.