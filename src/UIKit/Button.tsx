import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        border: "none",
        color: "#FFFFFF",
        background: "#F6643F",
        padding: "6px 12px",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
