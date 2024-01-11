import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

 const INITIAL_STATE = {
   user: null,
 isFetching: false,
  error: false,
 };
export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const userStored = sessionStorage.getItem("user");

  const [state, dispatch] = useReducer(AuthReducer, userStored ? JSON.parse(userStored) : INITIAL_STATE);
  useEffect(() => {
    if (userStored) {
      dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(userStored) });
    }
  }, [userStored]);

  return (
    <AuthContext.Provider
      value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};