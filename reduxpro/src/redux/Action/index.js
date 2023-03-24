//  export const addToCart=(data)=>{
//     console.warn("action called", data)
//     return {
//         type:"ADD_TO_CART",
//         data
//     }
// }

// import * as Context from "../Context/index"
export const increaseValue = () => {
    return {
        type: "INCREMENT"
    }
}
export const decreaseValue = () => {
    return {
        type: "DECREMENT"
    }

}
