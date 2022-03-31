import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default ({submitForm }) => {
  const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const { name, surname, city, country } = user;

    const dataInput = (e) => {
      e.preventDefault()
      dispatch({type: 'DATA_INPUT', payload: {name: e.target.name, value: e.target.value }})
    }

    const submitFormRegistrarion = (e) => {
      e.preventDefault()
      dispatch({type: 'TESTING'})
    }
   
    return (
      <div>
        <div>
          <div>
            Добро пожаловать на тестирование,
            <br />
            для успешного прохождения теста
            <br />
            тебе необходимо набрать больше 6 баллов
            <br />
            <br />
          </div>
          <div>
            Для начала тестирования необходимо заполнить форму
            <br />
            <br />
          </div>
        </div>
        <div>
          <form>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                onChange={dataInput}
                value={name}
              />
            </div>
            <div>
              <input
                type="text"
                name="surname"
                placeholder="Фамилия"
                onChange={dataInput}
                value={surname}
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                placeholder="Город"
                onChange={dataInput}
                value={city}
              />
            </div>
            <div>
              <label htmlFor="country">
                <select
                  id="country"
                  name="country"
                  value={country}
                  onChange={dataInput}
                >
                  <option value="">Страна</option>
                  <option value="Аргентина">Аргентина</option>
                  <option value="Россия">Россия</option>
                  <option value="Китай">Китай</option>
                </select>
              </label>
            </div>
            <button onClick={submitFormRegistrarion} type="submit">
              Начать тест
            </button>
          </form>
        </div>
      </div>
    );
  };
  