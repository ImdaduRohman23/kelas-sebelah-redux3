// import { INCREMENT ,DECREMENT, RESET } from "../types";
import TYPES from "../types";

const initState = {
    total: 0,
}

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:
            return {
                ...state,
                total: state.total + 1
            };
        case TYPES.DECREMENT :
            return {
                ...state,
                total: state.total - 1
            };
        case TYPES.RESET :
            return {
                ...state,
                total: 0
            };
            
        default:
            return state
    }
}

export default counterReducer;