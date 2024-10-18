import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        border: "none",
        background: "none",
        fill: "#F6643F",
        stroke: "#F6643F",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
