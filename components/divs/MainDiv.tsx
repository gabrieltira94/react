import { PropsWithChildren } from "react";

export function MainDiv(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div style={{ border: '1px solid blue', margin: 20, padding: 10 }}>
      {children}
    </div>
  );
}
