const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ course }) => (
  <p>
    <strong>
      total of{" "}
      {course.parts
        .map((part) => part.exercises)
        .reduce((acc, currentValue) => {
          return acc + currentValue;
        }, 0)}{" "}
      exercises
    </strong>
  </p>
);
//   {
//   return (
//     <>
//       {/* <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </p> */}
//     </>
//   )
// }

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
      <Total course={course} />
    </>
  );
};

export default App;
