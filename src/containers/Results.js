import { useNavigate, useParams } from "react-router-dom";
import { Loader, Navbar, QuizSection } from "../components";
import { useQuiz } from "../context";
import { useQueryQuizById } from "../services";

const Results = () => {
  const navigate = useNavigate();
  const {
    quizState: { selectedQuestionAnswers },
    quizDispatch,
  } = useQuiz();
  const { quizId } = useParams();
  const { loading, quizDetails } = useQueryQuizById(quizId);
  const questions = quizDetails.mcqs;
  let selectedAnswersObj = {};

  const totalQuizScore = () => {
    let totalScore = 0;
    selectedQuestionAnswers.forEach(({ questionId, answer }) => {
      selectedAnswersObj[questionId] = answer;
    });
    questions.forEach(({ _id, answer }) => {
      if (selectedAnswersObj[_id] === answer) {
        totalScore += 5;
      }
    });
    return totalScore;
  };
  return (
    <div className="page-wrapper">
      <Navbar />
      <Loader loading={loading} />
      {!loading && (
        <main class="main main-section main-section-strech pd-md">
          <h1 class="text-align-center white-color">Results</h1>
          <h2 class="text-align-center white-color mg-t-sm">
            Final Score: {totalQuizScore()} / 25
          </h2>
          {questions?.map((question) => (
            <QuizSection
              type="results"
              questionInfo={question}
              selectedAnswersObj={selectedAnswersObj}
            />
          ))}

          <div class="flex-center">
            <button
              onClick={() => {
                quizDispatch({ type: "RESET_QUIZ_STATE_TO_INITIAL" });
                navigate("/");
              }}
              class="btn btn-primary outline outline-primary border-radius-sm explore"
            >
              Play Again
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export { Results };
