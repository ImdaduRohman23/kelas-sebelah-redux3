import React from 'react'
import { useDispatch } from 'react-redux'
import TYPES from '../redux/types';
// import { INCREMENT, DECREMENT, RESET } from '../redux/types';
//dispatch => untuk melempar atau mengirim apapun ke redux

const CounterAction = () => {
    const dispatch = useDispatch();

    const handlePlus = () => {
        dispatch({
            type: TYPES.INCREMENT
        });
    };

    const handleMinus = () => {
        dispatch({
            type: TYPES.DECREMENT
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
