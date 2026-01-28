import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>👐</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read Children prop</p>
        <p>👏</p>
      </StepMessage>
    </div>
  );
}
function Steps() {
  // 06005 - creating state variable using useState
  // 06006 - dont set state munally
  // 06007 - Adding a new state
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true); // store default value

  // const [test, setTest] = useState({ name: "Steven" });

  // 06003 - handling events the react way
  // 06004 - State in react
  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((curStep) => curStep + 1);

    // setTest({ name: "Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setOpen((is) => !is)}>
        &times;
      </button>

      {/* open */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            <h3>Step {step}</h3> {messages[step - 1]}
          </p> */}

          <StepMessage step={step}>
            {messages[step - 1]}

            <div className="buttons">
              <Button
                bgColor="e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// 07014 - child prop making a reuseable button
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {/* one of the most useful features - {props.children} */}
      {/* <span>👈</span> Previous */}
      {children}
    </button>
  );
}

// 07015 - more reusability with children prop
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}: </h3>
      {children}
    </div>
  );
}
