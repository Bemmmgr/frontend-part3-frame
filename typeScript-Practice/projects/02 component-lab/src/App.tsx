// import Input from "./components/Input";
import { useRef } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Form, { type FormHandle } from "./components/Form";
import Container from "./components/Container";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    // data coming from input field - as
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);

    customForm.current?.clear();
  }

  return (
    <main>
      {/* 051 052 058 */}
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
      <Input label="test" id="test" ref={input} />

      {/* 053 */}
      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>

      {/* 055/056 */}
      <Container as={Button}>Click me</Container>

      {/* 059/061 */}
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
