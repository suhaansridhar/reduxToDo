import { ADD_CAKE, BUY_CAKE } from "../Actions/ActionTypes/cakeTypes"

const initialState = {
    numberOfCakes : 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action){
        case BUY_CAKE:
            return{
                ...state, 
                numberOfCakes : state.numberOfCakes - 1
            }
        
        case ADD_CAKE:
            return{
                ...state, 
                numberOfCakes : state.numberOfCakes + 1
            }

        default: 
            return state
    }
}

export default cakeReducer;