import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth, useToast } from "../../context";
import { useAxios } from "../../hooks";
import { MESSAGES } from "../../utils";

export const useLogin = () => {
  const location = useLocation();
  const [enabled, setEnabled] = useState(false);
  const [payload, setPayload] = useState(null);
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();
  const { toastDispatch } = useToast();
  // const { productsDispatch } = useProducts();
  const { setAuth } = useAuth();
  const requestLogin = (url, payload) => {
    setPayload(payload);
    setEnabled(true);
    setUrl(url);
  };
  const axiosParam = {
    method: "POST",
    url,
    payload,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  useEffect(() => {
    if (data?.encodedToken) {
      const foundUser = data.foundUser;
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(foundUser));
      setAuth({
        isAuth: true,
        token: data?.encodedToken,
        userDetails: foundUser,
      });
      // productsDispatch({
      //   type: "SET_WISHLIST_CART_PRODUCTS",
      //   payload: { wishlist, cart },
      // });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.LOGIN.SUCCESS,
          errorMessage: null,
        },
      });
      if (location.state?.from) {
        navigate(location.state.from.pathname);
      } else {
        navigate("/");
      }
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.LOGIN.ERROR,
        },
      });
    }
  }, [
    data?.encodedToken,
    errorMessage,
    toastDispatch,
    enabled,
    navigate,
    data?.foundUser,
    setAuth,
    location,
  ]);
  return {
    token: data?.encodedToken,
    loading,
    requestLogin,
  };
};
