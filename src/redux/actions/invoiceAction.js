import { getAllInvoices } from "../api/ApiService";
import { GET_INVOICE } from "../constants";

export const GetInvoicesActionFn = (data) => {
  return (dispatch) => {
    getAllInvoices(data)
      .then((response) => {
        if (response && response.status && response.status === 200) {
          dispatch({ type: GET_INVOICE, payload: response });
        }
      })
      .catch(({ ...error }) => {
        throw error;
      });
  };
};
