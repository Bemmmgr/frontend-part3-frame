import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
} from "react";

// 051 - basic wrapper component
// 052 - wrapper component with ComponentPropsWithoutRef

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

// 058 - Using forwardRef
// provide extra relate type info, will be stored in the ref
// <1, 2> first refers to the type ref will manage, second for props
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref,
) {
  return (
    <p>
      {/* custom props */}
      <label htmlFor={id}>{label}</label>
      {/* other remaining input props */}
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
