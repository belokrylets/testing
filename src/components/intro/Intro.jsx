import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './intro.css';

const Intro = () => {

  const dispatch = useDispatch()

  const buttonGO = () => {
    dispatch({
      type
        : 'REGISTRATION'
    })
  }

  return (
    <div className='intro'>
      <h1>SPA Тестирование</h1>
      <h5>Stack:</h5>
      <ul>
        <li>ReactJS</li>
        <li>Redux</li>
        <li>Redux thunk</li>
        <li>Redux devtools extension</li>
        <li>React bootstrap</li>
        <li>Axios</li>
        <li>React Router Dom</li></ul>
        <p>Тестирование состоит из 2х блоков по 7 вопросов. Вопросы загружаются с сервера, путем get запроса.</p>
        <Button onClick={buttonGO} variant='primary'>Приступить к тестированию</Button>
    </div>
  
  );
}

export default Intro;