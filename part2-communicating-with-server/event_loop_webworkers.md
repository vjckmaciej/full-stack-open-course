
# 🧠 Event Loop, Asynchroniczność i Wielowątkowość w JavaScript

## 📌 Dlaczego JavaScript działa inaczej?

JavaScript od początku został zaprojektowany jako **jednowątkowy język**, czyli wykonuje kod **linia po linii, jeden proces w danym czasie**. To oznacza, że:

- **Nie może wykonywać kodu równolegle** jak np. Java.
- Ale nadal musi reagować na kliknięcia, dane z API, itd.
- Rozwiązaniem jest **model asynchroniczny z Event Loop**.

---

## 🔄 Co to jest Event Loop?

**Event Loop** to mechanizm, który:
1. Wykonuje kod synchroniczny (np. `const a = 5`)
2. Wstrzymuje się przy `setTimeout`, `fetch`, `event listener`
3. Gdy te zadania się skończą – wkłada je do kolejki
4. Gdy główny wątek jest wolny – wykonuje je po kolei

📌 **Zasada "Run to completion"** – każda funkcja jest dokończona zanim ruszy następna.

### 🧪 Przykład

```js
console.log('start');

setTimeout(() => {
  console.log('inside timeout');
}, 0);

console.log('end');
```

**Wynik:**
```
start
end
inside timeout
```

---

## 🚫 Co się stanie, gdy kod zajmie za dużo czasu?

```js
setTimeout(() => {
  console.log('loop..')
  let i = 0
  while (i < 5000000000) {
    i++;
  }
  console.log('end');
}, 5000);
```

❌ Gdy ta funkcja się uruchomi – **blokuje cały wątek główny**:
- Nie można klikać, scrollować
- Nawet zamknięcie karty nie działa

✅ Dlatego w JS ważne jest: **krótkie zadania + asynchroniczność**

---

## 🧵 Co z wielowątkowością?

### 🛠 Web Workers

JS nadal działa w jednym wątku, ale:
- Można tworzyć inne wątki **w tle**, za pomocą **Web Workers**
- Worker nie ma dostępu do DOM
- Komunikacja z Workerem = przez `postMessage()`

```js
const worker = new Worker('worker.js');

worker.postMessage('Start!');
worker.onmessage = (event) => {
  console.log('Wynik z workera:', event.data);
};
```

W `worker.js`:

```js
onmessage = function(event) {
  const result = computeSomethingHeavy();
  postMessage(result);
}
```

📌 Działa **równolegle** – ale tylko przez komunikację (brak wspólnej pamięci, chyba że SharedArrayBuffer).

---

## 📦 Node.js i wielowątkowość

- Node.js też ma **Event Loop**, ale:
- Obsługuje I/O (np. dysk, sieć) w tle przez **libuv**
- Wspiera **Worker Threads** (od Node 10+), ale też preferuje **asynchroniczność** i **Promise**

---

## 🧰 Co jeszcze warto znać?

- `Promise` i `async/await` = wygodne API do programowania asynchronicznego
- `setTimeout`, `setInterval` = mechanizmy opóźnień
- `requestAnimationFrame` = dla animacji
- `queueMicrotask()` = kolejka z wyższym priorytetem (np. `.then()` Promisa)
