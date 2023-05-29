import { useRef } from 'react';
import SecondForwardRef from './SecondForwardRef';
import { MainDiv } from '@/components/divs/MainDiv';

export default function MainForwardRef() {
  const ref = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (ref.current)
      ref.current.focus();
  }

  return (
    <MainDiv>
      <button type="button" onClick={handleClick}>
        Press me to focus the below input text
      </button>

      <SecondForwardRef label="Write your weakest muscle: " ref={ref} />
    </MainDiv>
  );
}
