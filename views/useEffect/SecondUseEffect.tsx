import { SecondaryDiv } from "@/components/divs/SecondaryDiv";
import { Muscles } from "@/misc/Muscles";
import { useEffect, useState } from "react";

interface Props {
  muscle?: Muscles;
}

export default function SecondUseEffect(props: Props) {
  const { muscle } = props;
  const [text, setText] = useState<string>('');

  useEffect(() => {
    switch (muscle) {
      case "Abs":
      case "Lumbar":
        return setText(`You want strong abdomnial belt, since you want to work ${muscle}, nice!`);

      case "Chest":
      case "Triceps":
      case "Shoulders":
        return setText(`Oh, push day for ${muscle}, got it!`);

      case "Back":
      case "Biceps":
        return setText(`You want to work ${muscle}, got it!`);

      case "Legs":
        return setText(`${muscle}! You picked the most beautiful group!`);
      default:
        setText("Why don't you pick something? Let's train!");
    }
  }, [muscle]);

  return (
    <SecondaryDiv>
      <h2>SecondUseEffect component</h2>

      <p>{text}</p>
    </SecondaryDiv>
  );
}