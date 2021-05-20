import {
    GET_INVOICE,
  } from "../constants";
  const initialState = {
    allinvoice: [],
    
  };
  
  const Invoices = (state = initialState, action) => {
    switch (action.type) {
      case GET_INVOICE:
        return {
          ...state,
          allinvoice: action.payload.data,
        };
  
     
      default:
        return state;
    }
  };
  
  export default Invoices;
  