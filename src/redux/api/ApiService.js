import axios from "axios";
import { axiosVal } from "./axiosapi";

export const AuthApi = (data) => {
    return axiosVal().post("login/login", data);
  };
// products
export const getAllProducts = (data) =>{
  return axiosVal().get(`products/getAll?state_id=${data.state_id}&offset=${data.offset}&limit=${data.limit}`);

}
export const getDealerProducts = (data) =>{
  return axiosVal().get(`products/getAllColor?state_id=${data.state_id}&priceListId=${data.price_id}`);

}

export const getTaxDetails = (id) =>{
  return axiosVal().get(`dashboard/getTax`);
}
// scheme claims
export const getSchemeClaims = (data) =>{
  return axiosVal().get(`dealers/getDealerClaims?dealer_id=${data.dealer_id}&offset=${data.offset}&limit=${data.limit}&date=${data.date}`);

}

export const getAllSchemeClaims = (data) =>{
  return axiosVal().get(`schemeMaster/getScheme?state__c=${data.state_id}&dealer__c=${data.dealer_id}`);

}

// customers

export const getAllCustomers = () =>{
  return axiosVal().get(`customers/getCustmoer`);
}




// 



