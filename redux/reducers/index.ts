import { combineReducers } from "redux";
import authenReducer from "./auth.reducers";

const rootReducer = combineReducers({
    authenReducer,
    //profile:profile
})

export default rootReducer;