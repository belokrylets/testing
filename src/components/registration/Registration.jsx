import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './registration.css'

const Registration = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const { name, surname, city, country } = user;

  const dataInput = (e) => {
    e.preventDefault()
    dispatch({ type: 'DATA_INPUT', payload: { name: e.target.name, value: e.target.value } })
  }

  const submitFormRegistrarion = (e) => {
    e.preventDefault()
    dispatch({ type: 'TESTING' })
  }

  return (
      <div className="registration">
        <div>
          <div className="mt-3 mb-3">
            Для успешного прохождения теста
            <br />
            необходимо набрать больше 9 баллов
      
          </div>
          <div className="mb-3">
            Для начала тестирования необходимо заполнить форму
          </div>
        </div>
        <div>
        <Form onSubmit={submitFormRegistrarion}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="name"
              placeholder="Имя"
              onChange={dataInput}
              value={name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="surname"
              placeholder="Фамилия"
              onChange={dataInput}
              value={surname} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="city"
              placeholder="Город"
              onChange={dataInput}
              value={city} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select 
            aria-label="Default select example"
            id="country"
            name="country"
            value={country}
            onChange={dataInput}
            >
            <option value="">Страна</option>
                  <option value="Аргентина">Аргентина</option>
                  <option value="Россия">Россия</option>
                  <option value="Китай">Китай</option>
            </Form.Select>
          </Form.Group>
          <Button disabled={!name || !surname || !city || !country} variant="primary" type="submit">
          Начать тест
          </Button>
        </Form>
        </div>
      </div>
  );
};

export default Registration;