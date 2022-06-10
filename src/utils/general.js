export const logout = (setAuth, quizDispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userDetails");
  setAuth({ isAuth: false, token: null, userDetails: {} });
  quizDispatch({
    type: "RESET_QUIZ_STATE_TO_INITIAL",
  });
};
