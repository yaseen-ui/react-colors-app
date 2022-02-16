import './App.css';
import NameDisplayer from './NameDisplayer';
import DateDisplayer from './DateDisplayer';
import ColorChanger from './ColorChanger';
import { useEffect, useState } from 'react';
import Form from './Form';
import ReducerTest from './ReducerTest';

function App() {
  const [backgroundColor, setbackgroundColor] = useState('');
  const [name, setName] = useState('Yaseen');

  useEffect(() => {
    console.log('change')
  }, [backgroundColor]);
  const changeColor = (color) => {
    setbackgroundColor(color);
  }
  return (
    <div className="App" style={{ backgroundColor }}>
      <ReducerTest></ReducerTest>
      <div>Hey, {false}</div>
      <div>{undefined}</div>
      <div>{String(null)}</div>
      <NameDisplayer name="billa" color={backgroundColor}></NameDisplayer>
      <Form initialCount={1}></Form>
      <h2>what is typed is: {name}</h2>
      <textarea value={name} onChange={(e) => setName(e.target.value)} style={{ width: '480px', height: '100px' }} />
      <DateDisplayer></DateDisplayer>
      <ColorChanger colorChanger={changeColor}></ColorChanger>
    </div>
  );
}

export default App;
