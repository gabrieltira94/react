import { SecondaryDiv } from '@/components/divs/SecondaryDiv';
import { ForwardedRef, forwardRef } from 'react';

interface Props {
  label: string;
}

const SecondForwardRef = forwardRef(function SecondForwardRef(props: Props, ref: ForwardedRef<HTMLInputElement>) {

  const { label, ...otherProps } = props;

  return (
    <SecondaryDiv>
      <label>
        {label}
        <input {...otherProps} ref={ref} />
      </label>
    </SecondaryDiv>
  );
});

export default SecondForwardRef;
