import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
    <>
        <h2>{count} {name}</h2>
        <button onClick={ () => setCount(count+1) }>+</button>
        <button onClick= { () => setCount(count-1)}>-</button>

        <br />

        <button onClick={ () => setCount(0) }>Reset</button>
        {/* <button onClick={ () => setCount(11) }>Make it 11</button> */}
        {/* <button onClick={() => setName('Todd')}>Todd</button> */}
    </>
    )
}