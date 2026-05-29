import { ComponentPropsWithoutRef } from "react";

// 051 - basic wrapper component
// 052 - wrapper component with ComponentPropsWithoutRef
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <p>
      {/* custom props */}
      <label htmlFor={id}>{label}</label>
      {/* other remaining input props */}
      <input id={id} {...props} />
    </p>
  );
}
