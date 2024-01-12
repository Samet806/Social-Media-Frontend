import axios from "axios";

// loginCall fonksiyonu içindeki sessionStorage.setItem satırını düzeltin
export const loginCall = async (userCredentials, dispatch) => {

   try {
     const res = await axios.post("auth/login", userCredentials);
     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
     sessionStorage.setItem("user", JSON.stringify(res.data));
   } catch (err) {
     dispatch({ type: "LOGIN_ERROR", payload: err });
   }
 };