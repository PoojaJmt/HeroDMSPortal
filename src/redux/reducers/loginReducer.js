import {
    LOGIN,LOGIN_ERROR, LOGOUT
  } from "../constants";
  const initialState = {
    loginSuccesData: {},
    loginErrorData: {},
  };
  const LoginData = (state = initialState, action) => {
    switch (action.type) {
    
     
    
      case LOGIN_ERROR:
        return {
          ...state,
          loginErrorData: action.payload,
        };
  
      case LOGIN:
        let accessToken = action.payload.data.data.token;
        return {
          ...state,
          loginSuccesData: action.payload.data.data,
          accessToken: accessToken,
          
        };
        case LOGOUT:
          console.log('logout call')
          return {
            initialState
          };
  
    
  
      default:
        return state;
    }
  };
  
  export default LoginData;
  