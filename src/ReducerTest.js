import { useReducer, useState } from 'react';

function reduceToDo(list, name) {
    return [...list, name];
}

export default function ReducerTest() {
    const [name, setName] = useState('');
    const [list, addToDo] = useReducer(reduceToDo, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(name);
        setName('');
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </form>
        <ul>
            {list.map((ele,i) => <li key={'index_'+i}>{ele}</li>)}
        </ul>
    </>;
}