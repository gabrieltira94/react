import { MainDiv } from "@/components/divs/MainDiv";
import SecondUseMemo from "./SecondUseMemo";
import { ChangeEvent, useState } from "react";
import { Splits } from "@/misc/Data";

export default function MainUseMemo() {
  const [split, setSplit] = useState<Splits>('Rest');
  const [days, setDays] = useState<number[]>([0]);

  const handleDaysChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    const valueAsArray = event.target.value.split(',');
    console.log(valueAsArray);
    const numberArray = valueAsArray.map(value => isNaN(Number(value)) ? 0 : Number(value));

    setDays(numberArray);
  };

  return (
    <MainDiv>
      <h2>MainUseMemo component</h2>

      <div>
        <label>Select Split </label>
        <select onChange={e => setSplit(e.target.value as Splits)}>
          <option value="Rest">Rest</option>
          <option value="Upper Body">Upper Body</option>
          <option value="Lower Body">Lower Body</option>
        </select>
      </div>

      <div>
        <label>Select days, separated by comma </label>
        <input type='text' onChange={handleDaysChange} />
      </div>

      <SecondUseMemo days={days} split={split} />
    </MainDiv>
  );
}