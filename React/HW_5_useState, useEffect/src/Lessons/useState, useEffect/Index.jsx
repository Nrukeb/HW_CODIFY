import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [ count , setCount ] = useState(0)
    const plus = () => {setCount(elem => elem +1)}
    const minus = () => {setCount(elem => elem -1)}
    useEffect(() => {console.log(count)}, [count])
    return (
        <div>
            {count}
            <div>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
            </div>
        </div>
    );
};

export default Counter