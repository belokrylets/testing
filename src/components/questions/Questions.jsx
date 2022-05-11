import "./questions.css";
import uniqueId from "lodash/uniqueId";
import cn from "classnames";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";



const Questions = () => {
  const dispatch = useDispatch();

  const { questions } = useSelector(state => state.questions)
  const { currentBlock, currentquestion } = useSelector(state => state.blocks)
  const { correctAnswer, currentAnswer, userResponse } = useSelector(state => state.result)

  const answerSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'CHANGE_LIST_ANSWER',
      payload: userResponse
    })

    if (currentAnswer === "true") {
      dispatch({
        type: 'CHANGE_CORRECT_ANSWER',
        payload: correctAnswer + 1
      })
    }
    dispatch({ type: 'CHANGE_CURRENT_QUESTION' })
    if (currentBlock === 'mathematics' && currentquestion > 5) {
      dispatch({ type: 'CHANGE_BLOCK' })
    }

    if (currentBlock === 'capitals' && currentquestion > 5) {
      dispatch({ type: 'RESULT' })
      dispatch({ type: 'RESET_BLOCK' })

    }


    dispatch({
      type: 'CHANGE_CURRENT_ANSWER',
      payload: ''
    })
  }

  const handleChange = (e) => {
    console.log(e.target.id);
    dispatch({
      type: 'CHANGE_CURRENT_ANSWER',
      payload: e.target.value,
    })
    dispatch({
      type: 'CHANGE_USER_RESPONSE',
      payload: {
        question: e.target.name,
        answer: e.target.id,
        isCorrect: e.target.value
      },
    })
  };

  return (
    <div className="questions">
      {questions.map(({ block, russianName, questions }) => (
        <div key={uniqueId()} className={cn('block', { active: block === currentBlock })}>
          <div className="mt-3"><h3>Блок: {russianName}</h3></div>
          {questions.map(
            ({ question, answers }, id) => (
              <div key={uniqueId()} className={cn("quest", { active: currentquestion === id })}>
                <div>{question}</div>
                <Form>
                  <Form.Group className="mb-3">
                    {answers.map((answerrr) => (

                      <Form.Check
                        id={answerrr.answer}
                        type="radio"
                        label={answerrr.answer}
                        onChange={handleChange}
                        checked={currentAnswer === answerrr.isCorrect}
                        value={answerrr.isCorrect}
                        name={question}
                      />

                    ))}
                  </Form.Group>

                </Form>
              </div>
            )
          )}
          <Button className="mb-3" disabled={!currentAnswer} onClick={answerSubmit} variant="primary" type="submit">
            Далее
          </Button>
        </div>

      ))}

    </div>
  );
};
export default Questions;