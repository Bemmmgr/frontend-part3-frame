// import DateCounter from "./DateCounter";
// 16006 - React quiz app
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],

  // loading, error, ready， active, finished
  status: "loading",

  // 16009 - displaying questions - display next question=>rerender
  index: 0,

  // 16010 - handling new answers
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  // 16006 - loading questions from fake API
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const numQuestions = questions.length;

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      {/* 16007 - handling Error,ready & loading status */}
      {/* 16008 - Starting a new quiz */}
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}
