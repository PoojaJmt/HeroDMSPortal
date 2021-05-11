import { getAllProducts, getAllSchemeClaims, getSchemeClaims } from "../api/ApiService";
import { GET_MASTER_SCHEME, GET_PRODUCTS, GET_SCHEME_CLAIMS } from "../constants";

export const GetSchemeClaimsActionFn = (data) => {
  return (dispatch) => {
    getSchemeClaims(data)
      .then((response) => {
        debugger
      
        if (response && response.status && response.status === 200) {
          dispatch({ type: GET_SCHEME_CLAIMS, payload: response});
        }
      })
      .catch(({ ...error }) => {
        throw error;
      });
  };
};

export const GetMasterSchemeClaimsActionFn = (data) =>{
  return (dispatch) => {
    
    getAllSchemeClaims(data)
    .then((response) => {
    
      
      if (response && response.status && response.status === 200) {
        dispatch({ type: GET_MASTER_SCHEME, payload: response});
      }
    })
    .catch(({ ...error }) => {
      throw error;
    });
  }
}
