import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers";

export const quizInitialState = {
  selectedQuestionAnswers: [],
};

const QuizContext = createContext(quizInitialState);

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
