// import { createStore } from "redux";
// import RootReducer from "../RootReducer";
// const store = createStore(RootReducer);
// export default store

import RootReducer from "../RootReducer";
import { createStore } from "redux";

const store =createStore(RootReducer);
export default store
