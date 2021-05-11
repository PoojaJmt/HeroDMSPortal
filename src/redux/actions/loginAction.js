import {AuthApi} from "../api/ApiService";
import {
    LOGIN,
    LOGIN_ERROR
  } from "../constants";

  export const LoginActionFn = (data) => {
    return (dispatch) => {
      
        AuthApi(data)
        .then((response) => {
          console.log(response)
      
          if (response && response.status && response.status === 200) {
            dispatch({ type: LOGIN, payload: response });
          }
        })
        .catch(({ ...error }) => {
          dispatch({ type: LOGIN_ERROR, payload: error.response.data });
  
          throw error;
        });
    };
  };
