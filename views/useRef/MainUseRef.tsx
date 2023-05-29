import { MainDiv } from "@/components/divs/MainDiv";
import { useRef } from "react";

export default function MainUseRef() {
  // Used as ref since is readonly and modified within handler only
  const counterRef = useRef<number>(0);

  const getRepsText = (reps: number) => {
    return reps === 1 ? 'rep' : 'reps';
  };

  const handlePushClick = () => {
    const newCounterValue = counterRef.current + 1;

    alert(`You pushed again the bar! Now you have ${newCounterValue} ${getRepsText(newCounterValue)} instead of ${counterRef.current}.`);

    counterRef.current = newCounterValue;
  };

  return (
    <MainDiv>
      <h2>MainUseRef component</h2>

      <button onClick={handlePushClick}>Press me to Chest press the barbell!</button>
    </MainDiv>
  );
}