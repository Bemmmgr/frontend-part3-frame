// import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      {/* 051 052 */}
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}

      {/* 053 */}
      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>

      {/* 055/056 */}
      <Container as={Button}>Click me</Container>
    </main>
  );
}

export default App;
