import type { ReactNode } from "react";

import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type CourseGoal as Cgoal } from "../App";

// 039 - reusing types across files
type CourseGoalListProps = {
  goals: Cgoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  // 047 - infobox component
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        Currently you have no Course goals. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        Too much goals right now. Don't put too muchu on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
