import React from 'react'
import { useDispatch } from 'react-redux'
//dispatch => untuk melempar atau mengirim apapun ke redux

const CounterAction = () => {
    const dispatch = useDispatch();

    const handlePlus = () => {
        dispatch({
            type: 'INCREMENT'
        });
    };

    const handleMinus = () => {
        dispatch({
            type: 'DECREMENT'
        });
    };

    const handleReset = () => {
        dispatch({
            type: 'RESET'
        });
    };

    return (
        <div>
            <button onClick={handlePlus}>Plus</button>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CounterAction
