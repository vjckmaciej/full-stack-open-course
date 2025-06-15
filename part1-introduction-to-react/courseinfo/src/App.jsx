const Header = (props) => {
  return (
    <>
     <h1>{props.courseName}</h1>
    </>
    )
}

const Content = ({parts}) => {
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Total = ({ exercises }) => {
  return (
    <>
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header courseName={course} />
      {/* <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} /> */}
      <Content parts={parts} />
      <Total exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]} />
    </div>
  )
}

export default App