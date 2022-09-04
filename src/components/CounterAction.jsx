import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TYPES from '../redux/types';
// import { INCREMENT, DECREMENT, RESET } from '../redux/types';
//dispatch => untuk melempar atau mengirim apapun ke redux

const CounterAction = () => {
    const dispatch = useDispatch();

    const {counterReducer} = useSelector(ehe => ehe)


    const handlePlus = () => {
        const result = counterReducer.total + 1;
        dispatch({
            type: TYPES.INCREMENT,
            payload: result
        });
    };

    const handleMinus = () => {
        const minus = counterReducer.total - 1;
        dispatch({
            type: TYPES.DECREMENT,
            payload: minus,
        });
    };

    // const handleReset = () => {
    //     dispatch({
    //         type: 'RESET'
    //     });
    // };

    return (
        <div>
            <button onClick={handlePlus}>Plus</button>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={() => dispatch({type: TYPES.RESET})}>Reset</button>
        </div>
    )
}

export default CounterAction
