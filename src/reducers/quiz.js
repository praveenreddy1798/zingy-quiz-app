import {
    updateUserSelectedQuizQuestionAnswer,
  setQuizStateToInitial,
} from "../utils";

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "RESET_QUIZ_STATE_TO_INITIAL":
      return setQuizStateToInitial();
    case "UPDATE_SELECTED_QUIZ_QUESTION_ANSWERS":
      return updateUserSelectedQuizQuestionAnswer(state, action);
    default:
      return state;
  }
};
