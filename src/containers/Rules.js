import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components";

const Rules = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="page-wrapper page-wrapper-filter-mob">
      <Navbar />
      <main class="main main-section main-section-strech pd-md">
        <h1 class="text-align-center white-color">Rules</h1>
        <div class="flex-center mg-xlg gap-2">
          <div class="card w-max-content rules-card border-radius-lg flex-vertical pd-lg bg-white gap-1">
            <div className="text-align-left">
              <h4>1. Their are 5 questions in total.</h4>
              <h4>2. Each question is of 5 marks.</h4>
              <h4>3. Every right answer will reward you with 5 marks</h4>
              <h4>
                4. You can attempt each question only once, can not redirect to
                previous question.
              </h4>
              <h4>5. All questions are mandatory to submit the quiz.</h4>
              <h4>
                6. You also have the option to quit and explore other quizes.
              </h4>
            </div>
            <div class="flex-center gap-2 mg-t-sm">
              <button
                onClick={() => navigate("/")}
                class="btn btn-secondary outline outline-secondary"
              >
                <h4>Go back</h4>
              </button>
              <button
                onClick={() => navigate(`/quiz/${quizId}`)}
                class="btn btn-primary outline outline-primary"
              >
                <h4>Start Quiz</h4>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Rules };
