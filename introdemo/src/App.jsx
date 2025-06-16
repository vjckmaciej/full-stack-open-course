const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <>{friends[0].name} is {friends[0].age} years old.</>
    </div>
  )
}

export default App