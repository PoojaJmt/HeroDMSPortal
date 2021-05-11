import axios from "axios";
import store from "../store/store";

const baseURL = "https://herodealersapp.herokuapp.com/";

export const axiosVal = () => {
  const data = store.getState();
  const accessToken = data?.LoginData?.loginSuccesData?.token
  const state = data?.LoginData?.loginSuccesData?.state__c
  console.log(data.LoginData.loginSuccesData)

  let token = accessToken;

  const BaseApi = axios.create({
    baseURL: baseURL,
    // timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'token': token,
      'state__c':state

    },

  });
  return BaseApi;
}
