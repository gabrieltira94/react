import { useWorkoutContext } from "@/contexts/WorkoutContext";
import InnerContext from "./InnerContext";
import { SecondaryDiv } from "@/components/divs/SecondaryDiv";

export default function MainContext() {
  const { setDay } = useWorkoutContext();

  return (
    <SecondaryDiv>
      <h2>Main Context component</h2>

      <button onClick={() => setDay('Rest')}>Press to Rest!</button>

      <InnerContext />
    </SecondaryDiv>
  );
}
