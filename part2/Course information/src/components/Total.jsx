export const Total = ({ course }) => {
  const sum = course.parts
    .map((part) => part.exercises)
    .reduce((a, b) => a + b);
  return (
    <div>
      <p> - Total of exercises: {sum}</p>
    </div>
  );
};
