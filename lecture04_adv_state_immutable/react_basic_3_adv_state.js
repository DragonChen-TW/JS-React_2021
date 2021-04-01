// ---------- form ----------
function App() {
    let [text, setText] = useState('');
    let [output, setOutput] = useState('');

    const onChange = e => setText(e.target.value);

    const printOut = () => {
        setOutput(text);
        setText('');
    }

    return (
        <div>
            <input type="number" value={text} onChange={onChange} />
            
            <button onClick={printOut}>=</button>
            <div>{output}</div>
        </div>
    )
}

// ---------- Calculator ----------

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const onChange1 = (e) => {
        setNum1(e.target.value);
        console.log('num1', e.target.value);
    };

    const onChange2 = (e) => {
        setNum2(e.target.value);
        console.log('num2', e.target.value);
    }

    const sumUp = () => {
        setSum(parseInt(num1) * parseInt(num2));
        setNum1(0);
        setNum2(0);
    }

    return (
        <div>
            <input type="number" value={num1} onChange={onChange1} />
            *
            <input type="number" value={num2} onChange={onChange2} />
            
            <button onClick={sumUp}>=</button>
            <div>{sum}</div>
        </div>
    );
}


// ---------- immutable ----------

function App() {
    let [nums, setNums] = useState([]);
    const increase = () => {
        
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <ul>
                {nums.map(n => <li>{n}</li>)}
            </ul>
        </div>
    )
}

import { useState } from 'react';

function App() {
    let [nums, setNums] = useState([]);
    const increase = () => {
        const newNums = nums;
        newNums.push(1);
        console.log(newNums);
        setNums(newNums);
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <ul>
                {nums.map(n => <li>{n}</li>)}
            </ul>
        </div>
    )
}

export default App;

// doesn't work, why?????
// cuz it's immutable

function App() {
    let [nums, setNums] = useState([]);
    const increase = () => {
        // const newList = list; // just refrence the array 
        const newList = Array.from(list);
        // copy value to a completely new one
        newList.push(1);
        console.log(newList);
        setNums(newList);
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <ul>
                {nums.map(n => <li>{n}</li>)}
            </ul>
        </div>
    )
}


// with text

let [list, setList] = useState([]);
let [text, setText] = useState('');

const onChange = (e) => {
    setText(e.target.value);
};

const increase = () => {
    const newList = Array.from(list);
    newList.push(text);
    setText('');
    setList(newList);
};

return (
    <div>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={increase}>Add</button>
        <ul>
            {list.map(n => <li>{n}</li>)}
        </ul>
    </div>
)