import * as React from 'react';
import './Star.css';

export interface Props {
    name: string;
    starNum: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({name, starNum, onIncrement, onDecrement}: Props) {

    return (
        <div className="container">
            <div>
                {name} - Starts: {starNum}
            </div>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    );

}

export default Hello;
