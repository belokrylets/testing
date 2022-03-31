import { useState } from "react";
import { listQuestions } from "./listQuestions";
import Qestions from "./components/Qestnins";
import Registration from "./components/Registration";
import Result from "./components/Result";
import "./App.css";
import { useSelector } from "react-redux";

export default function App() {

  const statePage = useSelector(state => state.statePage.statePage)
  console.log(statePage)
  const [user, setUser] = useState({
    name: "",
    surname: "",
    city: "",
    country: ""
  });
  const [answer, setAnswer] = useState("");
  const [qestions] = useState(listQuestions);
  const [state, setState] = useState("registration");
  const [result, setResult] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  const answerSubmit = (e) => {
    e.preventDefault();

    if (currentIdx > qestions.length - 2) {
      setState("result");
    }
    setCurrentIdx(currentIdx + 1);
    if (answer === "correctAnswer") {
      setResult(result + 1);
    }
    setAnswer("");
  };


  const rendering = (statePage) => {
    switch (statePage) {
      case "registration":
        return (
          <Registration />
        );
      case "testing":
        return (
          <Qestions
            answer={answer}
            qestions={qestions}
            idx={currentIdx}
            answerSubmit={answerSubmit}
            handleChange={handleChange}
          />
        );
      case "result":
        return <Result result={result} user={user} />;
      default:
        throw new Error(`${state} не нвйден`);
    }
  };
  return (
    <div className="App">
      <h1>Тестирование</h1>
      {rendering(statePage)}
    </div>
  );
}
