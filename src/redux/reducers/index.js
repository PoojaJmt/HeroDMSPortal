import { combineReducers } from "redux";
import LoginData from "./loginReducer";
import productsData from "./productReducer";
import SchemeClaims from "./schemeReducer";

const rootReduser = combineReducers({
    LoginData,
    productsData,
    SchemeClaims
})

export default rootReduser;