# 📚 Full Stack Open – Rozdział 0 – Podsumowanie

## 🔰 Wprowadzenie

Rozdział 0 pokazuje, **jak działają nowoczesne aplikacje webowe**, jeszcze zanim zaczniemy pisać jakikolwiek kod w React. Dowiesz się m.in.:

- jak wygląda komunikacja między przeglądarką a serwerem (HTTP)
- czym się różni aplikacja tradycyjna od SPA (Single Page Application)
- jak działa DOM, formularze, JavaScript i AJAX
- jak używać narzędzi developerskich (DevTools)

---

## 🌐 Tradycyjna aplikacja webowa

### 🔄 Jak to działa?

1. Przeglądarka wysyła `GET` do serwera
2. Serwer zwraca cały dokument HTML
3. Przeglądarka ładuje CSS, JS i obrazki
4. Każda interakcja (np. formularz) powoduje `POST`, po czym serwer robi `302 redirect` → **przeglądarka ładuje stronę od nowa**

### 🧱 Cechy:

- Cała logika po stronie **serwera**
- Przeglądarka tylko „wyświetla” wynik
- Każda zmiana = **reload całej strony**
- Typowe dla starszych technologii jak PHP, JSP, klasyczne Java

---

## ⚡ SPA (Single Page Application)

### 🔁 Jak to działa?

1. Przeglądarka pobiera **jeden HTML + JavaScript** (np. `spa.js`)
2. JavaScript w przeglądarce pobiera dane z API (`GET /data.json`)
3. Komponenty są renderowane dynamicznie przez JavaScript (React/Vue)
4. Interakcje (np. dodanie notatki) **nie powodują przeładowania strony** – tylko aktualizację widoku

### 🧠 Kluczowe różnice:

| Cecha                    | Tradycyjna aplikacja   | SPA                          |
|--------------------------|------------------------|------------------------------|
| Przeładowanie strony     | Tak                    | Nie                          |
| Gdzie działa logika      | Na serwerze            | W przeglądarce (JS)          |
| Format przesyłanych danych | HTML                  | JSON                         |
| Szybkość i UX            | Wolniejsze             | Szybsze, bardziej płynne     |

---

## 🧪 Narzędzia developerskie

Zawsze miej otwartą konsolę (`F12`) i:

- zakładkę **Console** – logi JS, błędy
- zakładkę **Network** – śledzenie requestów GET/POST
- zakładkę **Elements** – inspekcja struktury DOM
- zaznacz "Disable cache" i "Preserve log" w Network

---

## 📬 HTTP – GET i POST

### GET:
- żąda zasobu (HTML, CSS, JS, JSON)
- np. `GET /notes` → ładuje stronę

### POST:
- wysyła dane (np. formularz)
- np. `POST /new_note` z treścią notatki
- często kończy się `302 redirect` (w tradycyjnych aplikacjach)

---

## 📄 DOM – Document Object Model

- HTML jest reprezentowany jako **drzewo elementów**
- JS może je dynamicznie modyfikować (`createElement`, `appendChild`, `textContent`)
- DOM = interfejs między kodem a wyświetlanym HTML-em

---

## 🔧 AJAX i JSON

- AJAX = **asynchroniczne** pobieranie/wysyłanie danych bez reloadu strony
- Format danych: JSON
- W React (i SPA ogólnie) to podstawa do komunikacji z backendem

---

## 🧪 Formularze

- W tradycyjnej aplikacji formularz ma `action` i `method`
- W SPA – JS przejmuje obsługę `submit` i wysyła dane jako JSON
- `event.preventDefault()` zapobiega przeładowaniu strony

---

## 🎨 CSS

- Stylowanie odbywa się poprzez klasy (`className`)
- CSS ładowany przez `<link>` w `<head>`
- Można podejrzeć i modyfikować style w zakładce **Elements** w DevTools

---

## ⚙️ JavaScript i DOM

- Możesz tworzyć i modyfikować elementy DOM:
```js
const li = document.createElement('li')
li.textContent = 'Nowa notatka'
document.querySelector('ul').appendChild(li)
