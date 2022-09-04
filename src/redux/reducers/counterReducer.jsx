const initState = {
    total: 0,
}

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                total: state.total + 1
            };
        case 'DECREMENT' :
            return {
                ...state,
                total: state.total - 1
            };
        case 'RESET' :
            return {
                ...state,
                total: 0
            };
            
        default:
            return state
    }
}

export default counterReducer;