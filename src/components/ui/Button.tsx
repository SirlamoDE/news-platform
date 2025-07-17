import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
