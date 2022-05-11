import axios from "axios";
import randomQuestions from "../components/utils/randomQuestions";

const fetchQuestions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/belokrylets/myserver/listQuestions"
      );
      const result = response.data.map((blocks) => {
        const shuffleAnswer = randomQuestions(blocks.questions)
        return {...blocks, questions: shuffleAnswer}
      })
      dispatch({
        type: "GET_QUESTIONS",
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default fetchQuestions;
