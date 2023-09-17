import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";
export const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course, i) => (
        <div key={i}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </div>
  );
};
