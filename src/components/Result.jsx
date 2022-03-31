export default ({ result, user }) => {
    const { name, surname } = user;
    const renderSuccess = () => (
      <div>
        Уважаемый {name} {surname}! Поздравляем, вы набрали {result} из 10 баллов
        и успешно завершили тестирование
      </div>
    );
  
    const unSuccess = () => (
      <div>
        Уважаемый {name} {surname}! Вы набрали {result} из 10 баллов. Этого не
        достататчно для прохждения тестирования.
      </div>
    );
    return result > 6 ? renderSuccess() : unSuccess();
  };
  