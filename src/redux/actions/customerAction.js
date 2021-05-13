import { getAllCustomers } from "../api/ApiService";
import { GET_CUSTOMERS } from "../constants";

export const GetCustomersActionFn = () => {
  return (dispatch) => {
    getAllCustomers()
      .then((response) => {
        if (response && response.status && response.status === 200) {
          dispatch({ type: GET_CUSTOMERS, payload: response });
        }
      })
      .catch(({ ...error }) => {
        throw error;
      });
  };
};
