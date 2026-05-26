import { type PropsWithChildren } from "react";

// 030 - building first component & facing missing type
// 032 - Storing prop types as custom type or interface
/*
interface CourseGoalProps {
  title: string;
  //   description: string;
  children: ReactNode;
}
*/
type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

// 035 - another way of typing components
// FC - function component
/*
const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
*/
