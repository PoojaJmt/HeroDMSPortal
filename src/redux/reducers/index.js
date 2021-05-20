import { combineReducers } from "redux";
import LoginData from "./loginReducer";
import productsData from "./productReducer";
import SchemeClaims from "./schemeReducer";
import Customers from "./customerReducer";
import Invoices from "./invoiceReducer";

const rootReduser = combineReducers({
    LoginData,
    productsData,
    SchemeClaims,
    Customers,
    Invoices
})

export default rootReduser;