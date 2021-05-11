import {
  GET_MASTER_SCHEME,
  GET_PRODUCTS,
  GET_SCHEME_CLAIMS,
} from "../constants";
const initialState = {
  allSchemeClaims: [],
  allMasterSchemeClaims: [],
};

const SchemeClaims = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEME_CLAIMS:
      return {
        ...state,
        allSchemeClaims: action.payload.data,
      };

    case GET_MASTER_SCHEME:
     
      return {
        ...state,
        allMasterSchemeClaims: action.payload.data.data,
      };
    

    default:
      return state;
  }
};

export default SchemeClaims;
