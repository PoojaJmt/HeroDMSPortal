import { getAllProducts, getDealerProducts, getTaxDetails } from "../api/ApiService";
import { GET_DEALER_PRODUCTS, GET_PRODUCTS, GET_TAX } from "../constants";

export const GetProductsActionFn = (data) => {
  return (dispatch) => {
    getAllProducts(data)
      .then((response) => {
        if (response && response.status && response.status === 200) {
          dispatch({ type: GET_PRODUCTS, payload: response});
        }
      })
      .catch(({ ...error }) => {
        throw error;
      });
  };
};

export const GetDealerProductsActionFn = (data) => {
  return (dispatch) => {
   
    getDealerProducts(data)
      .then((response) => {
        if (response && response.status && response.status === 200) {
          dispatch({ type: GET_DEALER_PRODUCTS, payload: response});
        }
      })
      .catch(({ ...error }) => {
        throw error;
      });
  };
};


export const GetTaxActionFn = () =>{
  return (dispatch) => {
    getTaxDetails()
    .then((response) => {
      if (response && response.status && response.status === 200) {
        dispatch({ type: GET_TAX, payload: response});
      }
    })
    .catch(({ ...error }) => {
      throw error;
    });
  }
}


