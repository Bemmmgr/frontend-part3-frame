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
      <Steps />
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

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious} // just pasing value, not calling func
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
