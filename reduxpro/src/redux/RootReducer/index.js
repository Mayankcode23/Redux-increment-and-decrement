// import { combineReducers } from "redux";
// import { cartData } from "../Reducer";
// export default combineReducers(
//     {cartData}
// )


import { combineReducers } from "redux";
import { counterReducer } from "../Reducer";
export default combineReducers(
    {counter:counterReducer}
)

