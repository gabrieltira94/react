import { PropsWithChildren } from "react";

export function SecondaryDiv(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div style={{ border: '1px dashed green', margin: 20, padding: 10 }}>
      {children}
    </div>
  );
}
