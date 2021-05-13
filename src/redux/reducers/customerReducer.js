import {
    GET_CUSTOMERS,
  } from "../constants";
  const initialState = {
    allcustomers: [],
    
  };
  
  const Customers = (state = initialState, action) => {
    switch (action.type) {
      case GET_CUSTOMERS:
        return {
          ...state,
          allcustomers: action.payload.data,
        };
  
     
      default:
        return state;
    }
  };
  
  export default Customers;
  