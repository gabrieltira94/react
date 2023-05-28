import { Muscles } from "@/misc/Muscles";
import { useState } from "react";

interface Props {
  muscle: Muscles;
}

export default function ExerciseCounter(props: Props) {
  const { muscle } = props;
  const [sets, setSets] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);


  return (
    <>
      <>
        <p>Count on me to count your progress!</p>
        <div>
          For <i>{muscle}</i>, you currently have: Sets: {sets}, reps: {reps}.
        </div>
      </>

      <div>
        <h3>Sets</h3>
        <button onClick={() => setSets(sets + 1)}>Add 1 more set</button>
      </div>

      <div>
        <h3>Reps</h3>
        <button onClick={() => setReps(reps + 1)}>Add 1 more rep</button>
      </div>

    </>
  );
}