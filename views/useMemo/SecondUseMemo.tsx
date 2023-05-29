import { SecondaryDiv } from "@/components/divs/SecondaryDiv";
import { Splits } from "@/misc/Data";
import { filterWorkout } from "@/utils/Workouts";
import { useMemo } from "react";

interface Props {
  split: Splits;
  days: number[];
}

export default function SecondUseMemo(props: Props) {
  const { days, split } = props;

  const workoutDays = useMemo(
    () => filterWorkout(split, days),
    [split, days]
  );

  return (
    <SecondaryDiv>
      <h2>SecondUseMemo component</h2>

      {workoutDays.length === 0 ?
        <p>No workouts for chosen criteria: {split}, on dates: {days.join(', ')} </p>
        :
        workoutDays.map((workout, index) => (
          <div key={index}>
            Only on day {workout.day}, you will train {workout.muscle}.
          </div>
        ))
      }
    </SecondaryDiv>
  );
}