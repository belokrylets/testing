import "../question.css";
import uniqueId from "lodash/uniqueId";
import cn from "classnames";

export default ({ qestions, idx, answerSubmit, handleChange, answer }) => {
  return (
    <div>
      {qestions.map(
        ({ question, correctAnswer, wrongAnswer, wrongAnswer2 }, id) => (
          <div key={uniqueId()} className={cn("quest", { active: idx === id })}>
            <div>{question}</div>
            <form>
              <div>
                <label>
                  <input
                    onChange={handleChange}
                    checked={answer === "correctAnswer"}
                    type="radio"
                    value="correctAnswer"
                    name="answer"
                  />
                  {correctAnswer}
                </label>
              </div>
              <div>
                <label>
                  <input
                    checked={answer === "wrongAnswer"}
                    onChange={handleChange}
                    type="radio"
                    value="wrongAnswer"
                    name="answer"
                  />
                  {wrongAnswer}
                </label>
              </div>
              <div>
                <label>
                  <input
                    checked={answer === "wrongAnswer2"}
                    onChange={handleChange}
                    type="radio"
                    value="wrongAnswer2"
                    name="answer"
                  />
                  {wrongAnswer2}
                </label>
              </div>
              <button onClick={answerSubmit}>Далее</button>
            </form>
          </div>
        )
      )}
    </div>
  );
};
