import { GET_DEALER_PRODUCTS, GET_PRODUCTS, GET_TAX } from "../constants";
const initialState = {
  allProducts: [],
  dealerProducts: [],
  taxDetails: {},
};
const productsData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload.data,
      };

    case GET_DEALER_PRODUCTS:
      return {
        ...state,
        dealerProducts: action.payload.data,
      };

    case GET_TAX:
      return {
        ...state,
        taxDetails: action.payload.data,
      };

    default:
      return state;
  }
};

export default productsData;
