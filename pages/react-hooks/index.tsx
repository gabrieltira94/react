import { Days, WorkoutContext } from "@/contexts/WorkoutContext";
import ReactHooksView from "@/views/ReactHooks";
import { useState } from "react";

export default function ReactHooks() {
  const [day, setDay] = useState<Days>('Rest');

  return (
    // setDay assignemnt is spread in all places where `useWorkoutContext()` hook is used
    <WorkoutContext.Provider value={{ day, setDay }}>
      <ReactHooksView />
    </WorkoutContext.Provider>
  );
}
