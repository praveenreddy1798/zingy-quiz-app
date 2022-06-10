import { useAuth } from "../context";
import { useAxios } from "../hooks";

export const useQueryQuizCategories = () => {
  const axiosParam = {
    method: "GET",
    url: "/api/categories",
    token: null,
  };
  const { data, loading, error } = useAxios(axiosParam);
  return { loading, error, quizCategoriesInfo: data?.categories || [] };
};

export const useQueryCurrentQuizQuestion = (quizId, questionId) => {
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: `/api/quizzes/${quizId}/${questionId}`,
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);

  return { loading, error, currentQuizQuestionInfo: data?.question || {} };
};

export const useQueryQuizById = (quizId) => {
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: `/api/quizzes/${quizId}`,
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);

  return { loading, error, quizDetails: data?.quiz || {} };
};
