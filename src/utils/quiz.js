import { quizInitialState } from "../context/quiz";

export const setQuizStateToInitial = () => ({ ...quizInitialState });

export const updateUserSelectedQuizQuestionAnswer = (state, action) => {
  const newQuestionAnswer = action.payload;
  const clonedSelectedQuestionAnswers = [...state.selectedQuestionAnswers];
  clonedSelectedQuestionAnswers.push(newQuestionAnswer);
  return {
    ...state,
    selectedQuestionAnswers: clonedSelectedQuestionAnswers,
  };
};
