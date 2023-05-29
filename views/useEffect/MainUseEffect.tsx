import { MainDiv } from "@/components/divs/MainDiv";
import { Muscles } from "@/misc/Muscles";
import { useState } from "react";
import SecondUseEffect from "./SecondUseEffect";

export default function MainUseEffect() {
  const [muscle, setMuscle] = useState<Muscles>();

  return (
    <MainDiv>
      <h2>MainUseEffect component</h2>

      <select onChange={e => setMuscle(e.target.value as Muscles)} title="What muscle do you want to work?">
        <option>Lazy, no train!</option>
        <option>Chest</option>
        <option>Back</option>
        <option>Legs</option>
        <option>Biceps</option>
        <option>Triceps</option>
        <option>Shoulders</option>
        <option>Abs</option>
        <option>Lumbar</option>
      </select>

      <SecondUseEffect muscle={muscle} />
    </MainDiv>
  );
}