// export const cartData=(data=[],Action)=>{
//     // console.log("Reducer called",Action)
//     // return"abc";

//     if(Action.type === "ADD_TO_CART")
// {
//     console.log("Reducer called",Action)
//     return Action.data
// }else{
//     return "no action matched"
// }
// }


// import * as Context from "../Context/index"
// const intialState = {
//     count: 0
// }

export const counterReducer = (state = 0, Action) => {
    switch(Action.type){
        case "INCREMENT":
            return state +1;
        case "DECREMENT":
            return state -1;
        default:
            return state
    }
}
