import { Days, WorkoutContext } from "@/contexts/WorkoutContext";
import ReactView from "@/views/React";
import { useState } from "react";

export default function React() {
  const [day, setDay] = useState<Days>('Rest');

  return (
    // setDay assignemnt is spread in all places where `useWorkoutContext()` hook is used
    <WorkoutContext.Provider value={{ day, setDay }}>
      <ReactView />
    </WorkoutContext.Provider>
  );
}