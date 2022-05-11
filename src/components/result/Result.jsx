import './result.css'
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";


const Result = () => {



  const { correctAnswer, listAnswers } = useSelector(state => state.result)

  const { name, surname } = useSelector(state => state.user)

  const dispatch = useDispatch()
  const buttonRepeat = () => {
    dispatch({ type: 'RESET_RESULT' })
    dispatch({
      type: 'INTRO'
    })

  }

  const renderSuccess = () => (
    <>
      Уважаемый(ая) {name} {surname}! Поздравляем, вы набрали {correctAnswer} из 14 баллов
      и успешно завершили тестирование
    </>
  );

  const unSuccess = () => (
    <>
      Уважаемый(ая) {name} {surname}! Вы набрали {correctAnswer} из 14 баллов. Этого не
      достататчно для прохждения тестирования.
    </>
  );
  return (
    <div className='mt-3'>
      {correctAnswer > 9 ? renderSuccess() : unSuccess()}
      <div className='mt-5'>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Вопрос</th>
              <th>Ваш ответ</th>
            </tr>
          </thead>
          <tbody>
            {listAnswers.map(({ question, answer, isCorrect }) => (


              <tr className={cn(isCorrect === 'true' ? 'tr-true' : 'tr-false')}>
                <td>{question}</td>
                <td>{answer}</td>
              </tr>


            ))}
          </tbody>
        </Table>
      </div>
      <Button onClick={buttonRepeat} variant='primary'>Повторить</Button>
    </div>
  );
};

export default Result;