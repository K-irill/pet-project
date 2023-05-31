import React, {useState} from 'react';
import style from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
       setCount(prev => prev + 1);
    }

    return (
        <div className={style.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};