import { Part } from "./Part";

export const Content = ({ course }) => {
  console.log(course);
  return (
    <>
      {course.parts.map((part, i) => (
        <div key={i}>
          <Part prop={part.name} />
        </div>
      ))}
    </>
  );
};
