import { useNavigate } from "react-router";
import { useQuiz } from "../context";

const QuizSection = ({
  quizId,
  questionInfo,
  currentQuestionId,
  setCurrentQuestionId,
  type,
  selectedAnswersObj,
}) => {
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();

  const handleSelectOption = (option) => {
    if (type !== "results") {
      if (currentQuestionId < 5) {
        setCurrentQuestionId((currentQuestionId) => currentQuestionId + 1);
      } else {
        navigate(`/results/${quizId}`);
      }
      quizDispatch({
        type: "UPDATE_SELECTED_QUIZ_QUESTION_ANSWERS",
        payload: { questionId: currentQuestionId, answer: option },
      });
    } else {
      return;
    }
  };

  const getOptionStyle = (option) => {
    if (type === "results" && option === answer) {
      return "btn btn-success quiz-option w-100 border-radius-lg";
    } else if (
      type === "results" &&
      selectedAnswersObj[questionNumber] === option
    ) {
      return "btn btn-danger quiz-option w-100 border-radius-lg";
    }
    return "btn btn-primary outline outline-primary quiz-option w-100 border-radius-lg";
  };

  const { _id: questionNumber, options, question, answer } = questionInfo;
  return (
    <div class="flex-vertical align-center mg-xlg gap-2">
      <div class="card quiz-card border-radius-lg flex-vertical pd-lg bg-white gap-1">
        <div class="flex-center">
          <h3>
            {`Question: ${
              type === "results" ? questionNumber : `${questionNumber} / 5`
            }`}
          </h3>
        </div>
        <p class="mg-t-xsm regular-text regular-dark">{question}</p>
        <div class="flex-vertical gap-2 mg-t-sm">
          {options?.map((option, index) => (
            <button
              onClick={() => handleSelectOption(option)}
              key={index}
              class={getOptionStyle(option)}
            >
              <h4 class="regular-text regular-dark">{option}</h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { QuizSection };
