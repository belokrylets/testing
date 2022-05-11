const randomQuestions = (questions) => {
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  return questions.map((question) => {
    return { ...question, answers: shuffle(question.answers) };
  });
};

export default randomQuestions;
