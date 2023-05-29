import { SecondaryDiv } from "@/components/divs/SecondaryDiv";
import { memo } from "react";

interface Props {
  strongest: string;
}

const SecondMemo = memo(function SecondMemo(props: Props) {
  const { strongest } = props;

  console.log(`You typed ${strongest}, so SecondMemo rendered at: ${new Date().toLocaleTimeString()}`);

  return (
    <SecondaryDiv>
      <div>You typed {strongest}, so SecondMemo rendered at: {new Date().toLocaleTimeString()}</div>
      <div>Your strongest muscle is: {strongest}</div>
      <p><em>you can check console as well</em></p>
    </SecondaryDiv>
  );
});

export default SecondMemo;
