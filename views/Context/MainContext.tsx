import { useWorkoutContext } from "@/contexts/WorkoutContext";
import InnerContext from "./InnerContext";

export default function MainContext() {
  const { setDay } = useWorkoutContext();

  return (
    <div style={{ border: '1px dashed green', margin: 20 }}>
      <h2>Main Context component</h2>

      <button onClick={() => setDay('Rest')}>Press to Rest!</button>

      <InnerContext />
    </div>
  );
}