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

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;
