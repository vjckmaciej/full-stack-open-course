# Component State and Event Handlers

## Hello Component Example

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
```

## Component Helper Functions

```jsx
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

## Destructuring Props

```jsx
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

## Page Re-rendering

```jsx
let counter = 1
const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = () => {
  root.render(<App counter={counter} />)
}

refresh()
counter += 1
refresh()
counter += 1
refresh()
```

### With Interval

```jsx
setInterval(() => {
  refresh()
  counter += 1
}, 1000)
```

## Stateful Component with `useState`

```jsx
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(() => setCounter(counter + 1), 1000)

  return (
    <div>{counter}</div>
  )
}
```

## Event Handling

```jsx
const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  )
}
```

## Proper Event Handler Reference

```jsx
const increaseByOne = () => setCounter(counter + 1)
const setToZero = () => setCounter(0)
```

```jsx
<button onClick={increaseByOne}>plus</button>
<button onClick={setToZero}>zero</button>
```

## Passing State to Child Components

### Display Component

```jsx
const Display = ({ counter }) => <div>{counter}</div>
```

### Button Component

```jsx
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
```

## Full Example

```jsx
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}
```

## Debugging with `console.log`

Add `console.log` in critical spots to observe render flow:

```jsx
console.log('rendering with counter value', counter)
```

## Summary

- Use `useState` to add state to functional components.
- State updates trigger re-renders.
- Use destructuring and arrow functions for clean and concise components.
- Separate concerns by creating small, reusable components.
- Avoid calling state setters directly in `onClick={}` — always use a function or function reference.