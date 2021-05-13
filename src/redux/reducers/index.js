import { combineReducers } from "redux";
import LoginData from "./loginReducer";
import productsData from "./productReducer";
import SchemeClaims from "./schemeReducer";
import Customers from "./customerReducer";

const rootReduser = combineReducers({
    LoginData,
    productsData,
    SchemeClaims,
    Customers
})

export default rootReduser;