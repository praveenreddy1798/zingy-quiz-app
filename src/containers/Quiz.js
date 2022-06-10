import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, Navbar, QuizSection } from "../components";
import { useQuiz } from "../context";
import { useQueryCurrentQuizQuestion } from "../services";

const Quiz = () => {
  const { quizId } = useParams();
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const { loading, currentQuizQuestionInfo } = useQueryCurrentQuizQuestion(
    quizId,
    currentQuestionId
  );
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <Navbar />
      <Loader loading={loading} />
      {!loading && (
        <main class="main main-section main-section-strech pd-md">
          <div class="flex-end">
            <button
              onClick={() => {
                quizDispatch({ type: "RESET_QUIZ_STATE_TO_INITIAL" });
                navigate('/');
              }}
              class="btn btn-danger outline outline-danger border-radius-sm"
            >
              Quit Quiz
            </button>
          </div>
          <h1 class="text-align-center white-color">Sports</h1>
          <QuizSection
            quizId={quizId}
            questionInfo={currentQuizQuestionInfo}
            setCurrentQuestionId={setCurrentQuestionId}
            currentQuestionId={currentQuestionId}
            type="quiz"
          />
        </main>
      )}
    </div>
  );
};

export { Quiz };
