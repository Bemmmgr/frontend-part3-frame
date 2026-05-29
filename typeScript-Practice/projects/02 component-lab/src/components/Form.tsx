import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

// 059 - building custom Form component(wrapper component)
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

// 061 - Exposing component apis with ImperativeHandle
const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref,
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    // returned object can contain method can be called out side
    return {
      clear() {
        form.current?.reset();
      },
    };
  });

  // 060 - sharing logic with unknown & type casting / handle form submission
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
