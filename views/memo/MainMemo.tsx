import { useState } from "react";
import SecondMemo from "./SecondMemo";

export default function MainMemo() {
  const [weakMuscle, setWeakMuscle] = useState<string>('');
  const [strongMuscle, setStrongMuscle] = useState<string>('');

  return (
    <>
      <label>
        My weakest muscle is..
        <input value={weakMuscle} onChange={e => setWeakMuscle(e.target.value)} />
      </label>
      <label>
        My strongest muscle is..
        <input value={strongMuscle} onChange={e => setStrongMuscle(e.target.value)} />
      </label>
      <SecondMemo strongest={strongMuscle} />
    </>
  );
}