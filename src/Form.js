import { useEffect, useState } from 'react';

export default function Form({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const [backgroundColor, setbackgroundColor] = useState('');
    useEffect(() => {
        console.log('here')
        if (count % 2 === 0) {
            setbackgroundColor('green');
        } else {
            setbackgroundColor('red');
        }
    }, [count])
    return (
        <p style={{ backgroundColor }}>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </p>
    );
}