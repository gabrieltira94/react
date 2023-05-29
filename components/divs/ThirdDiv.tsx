import { PropsWithChildren } from "react";

export function ThirdDiv(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div style={{ border: '1px solid orange', margin: 20, padding: 10 }}>
      {children}
    </div>
  );
}
