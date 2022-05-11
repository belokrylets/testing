import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Questions from "./components/questions/Questions";
import Registration from "./components/registration/Registration";
import Result from "./components/result/Result";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchQuestions from "./asynsAction/fetchQuestions";
import Intro from "./components/intro/Intro";
import { Container } from "react-bootstrap";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const statePage = useSelector((state) => state.statePage.statePage);

  const rendering = (statePage) => {
    switch (statePage) {
      case "intro":
        return <Intro />;
      case "registration":
        return <Registration />;
      case "testing":
        return <Questions />;
      case "result":
        return <Result />;
      default:
        throw new Error(`${statePage} не нвйден`);
    }
  };
  return (
    <Container fluid="xxl">
      <div className="App">{rendering(statePage)}</div>
    </Container>
  );
};

export default App;
